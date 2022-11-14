import { FC, memo, useRef } from "react";
import { Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PlaneProps,
  Triplet,
  WorkerApi,
  Physics,
  useBox,
  usePlane,
} from "@react-three/cannon";
import { InstancedMesh, Mesh, Vector3, Color } from "three";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
} from "@react-three/postprocessing";
import useWebsiteState from "../../state/store";
import getSpiralCoords from "../../helpers/spiral.helper";
import mobileCheck from "../../helpers/isMobile.helper";

const DominoCanvas: FC = () => {
  const CAM_START: THREE.Vector3 = mobileCheck()
    ? new Vector3(-8, 40, 20)
    : new Vector3(-8, 12, 15);

  const Rig: FC = () => {
    const v = new THREE.Vector3();
    return useFrame((state) => {
      state.camera.position.lerp(
        v.set(
          CAM_START.x,
          CAM_START.y + state.mouse.y * 1.5,
          CAM_START.z + state.mouse.x * 1.5
        ),
        0.05
      );
      state.camera.lookAt(new THREE.Vector3(0, 0, 0));
    });
  };

  const Plane: FC<PlaneProps> = (props) => {
    const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null));
    return (
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial
          color={new Color("#333").convertSRGBToLinear()}
          opacity={0.5}
        />
      </mesh>
    );
  };

  const Dominos = () => {
    const { setHovering } = useWebsiteState();
    const args: Triplet = [0.1, 1, 0.5];
    const spiralData = getSpiralCoords();

    const [ref, { at }] = useBox(
      (instanceNumber: number) => ({
        args,
        mass: 0.5,
        position: [
          spiralData.positions[instanceNumber].x,
          0.5,
          spiralData.positions[instanceNumber].y,
        ],
        rotation: [0, spiralData.rotations[instanceNumber], 0],
      }),
      useRef<InstancedMesh>(null)
    );

    const firstDominoRef = useRef<WorkerApi | undefined>();
    firstDominoRef.current = at(spiralData.totalCount - 1);

    // Draw all dominos in the same color except the first one
    const dominoColorArray = new Float32Array(spiralData.totalCount * 3);
    const allDominosColor = new Color("#F6B5C7").convertSRGBToLinear();
    const allDominosColorRGB = [
      allDominosColor.r,
      allDominosColor.g,
      allDominosColor.b,
    ];
    const firstDominoColor = new Color("#fff").convertSRGBToLinear();
    const firstColorBuffer = new Float32Array(allDominosColorRGB);
    dominoColorArray.set(firstColorBuffer, 0);
    for (let i = 1; i < spiralData.totalCount - 1; i++) {
      dominoColorArray.copyWithin(i * 3, (i - 1) * 3, i * 3);
    }
    firstDominoColor.toArray(dominoColorArray, spiralData.totalCount * 3 - 3);

    return (
      <instancedMesh
        receiveShadow
        castShadow
        ref={ref}
        args={[undefined, undefined, spiralData.totalCount]}
        onPointerOver={(e) => {
          if (e.instanceId === spiralData.totalCount - 1) {
            setHovering(true);
          }
        }}
        onPointerLeave={(e) => {
          if (e.instanceId === spiralData.totalCount - 1) {
            setHovering(false);
          }
        }}
        onClick={(e) => {
          if (e.instanceId === spiralData.totalCount - 1) {
            firstDominoRef.current?.applyLocalImpulse([1, 0, 0], [0, 0.5, 0]);
          }
        }}
      >
        <boxGeometry args={args}>
          <instancedBufferAttribute
            attach="attributes-color"
            args={[dominoColorArray, 3]}
          />
        </boxGeometry>
        <meshStandardMaterial roughness={0.1} vertexColors toneMapped={false} />
      </instancedMesh>
    );
  };

  return (
    <Canvas
      shadows
      camera={{
        position: [CAM_START.x, CAM_START.y, CAM_START.z + 10],
        fov: 35,
      }}
    >
      <color attach="background" args={["#202030"]} />

      <ambientLight intensity={1} />
      <EffectComposer>
        <DepthOfField target={[0, 0, 5]} focalLength={0.005} bokehScale={5} />
        <Bloom />
        <Noise opacity={0.025} />
      </EffectComposer>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />

      <Sparkles count={200} scale={[20, 20, 10]} size={1.5} speed={2} />

      <Rig />

      <Physics
        allowSleep
        broadphase="Naive"
        iterations={20}
        tolerance={0.0001}
        defaultContactMaterial={{
          friction: 0.005,
          restitution: 0,
        }}
      >
        <Dominos />
        <Plane rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
    </Canvas>
  );
};

export default memo(DominoCanvas);
