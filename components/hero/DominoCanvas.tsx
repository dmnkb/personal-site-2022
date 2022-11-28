import React, { FC, memo, useRef } from "react";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PlaneProps,
  Triplet,
  WorkerApi,
  Physics,
  useBox,
  usePlane,
} from "@react-three/cannon";
import { InstancedMesh, Mesh, Vector3, Color } from "three";

import getSpiralCoords from "../../helpers/spiral.helper";
import mobileCheck from "../../helpers/isMobile.helper";
import CTA from "./CTA";

const DominoCanvas: FC = () => {
  const ctaRef = useRef<HTMLElement>();
  const cameraRef = useRef<THREE.Camera>();
  const firstDominoRef = useRef<WorkerApi | undefined>();

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

    const { size } = useThree();

    firstDominoRef.current.position.subscribe((pos: Triplet) => {
      if (!ctaRef.current || !cameraRef.current) {
        return;
      }
      const coords = new Vector3(pos[0], pos[1], pos[2]);
      cameraRef.current.updateMatrixWorld();
      const localCoords = coords.project(cameraRef.current);
      ctaRef.current.style.left = `${(localCoords.x + 1) * (size.width / 2)}px`;
      ctaRef.current.style.top = `${(1 - localCoords.y) * (size.height / 2)}px`;
    });

    return (
      <instancedMesh
        receiveShadow
        castShadow
        ref={ref}
        args={[undefined, undefined, spiralData.totalCount]}
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
    <>
      <CTA
        innerRef={ctaRef}
        onClick={() => {
          firstDominoRef.current?.applyLocalImpulse([1, 0, 0], [0, 0.5, 0]);
        }}
      />

      <Canvas
        shadows
        camera={{
          position: [CAM_START.x, CAM_START.y, CAM_START.z + 10],
          fov: 35,
        }}
        onCreated={(state) => {
          cameraRef.current = state.camera;
        }}
      >
        <ambientLight intensity={1} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />

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
    </>
  );
};

export default memo(DominoCanvas);
