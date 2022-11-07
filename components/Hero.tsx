import { FC, Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PlaneProps, Triplet, WorkerApi } from "@react-three/cannon";
import { Physics, useBox, usePlane, } from "@react-three/cannon";
import { InstancedMesh, Mesh, Vector3 } from "three";
import { Color } from "three";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import { Environment } from "@react-three/drei";
import getSpiralCoords from "./helpers/spiral.helper";

const Hero: FC = () => {
  const CAM_START: THREE.Vector3 = new Vector3(-8, 12, 15);
  const HOVER_CLASS = "hover-domino";

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

  const Dominos: FC = () => {
    const args: Triplet = [0.1, 1, 0.5];
    const [ref, { at }] = useBox(
      () => ({
        args,
        mass: 0.5,
      }),
      useRef<InstancedMesh>(null)
    );
    const spiralData = getSpiralCoords();
    const dominoCountTotal = spiralData.totalCount;
    const positions = spiralData.coords;

    const firstDominoRef = useRef<WorkerApi | undefined>();

    useEffect(() => {
      firstDominoRef.current = at(dominoCountTotal - 1);
      for (let i = 0; i < dominoCountTotal; i++) {
        at(i).position.set(positions[i].x, 0.5, positions[i].y);
        if (i >= 1) {
          let angle = Math.atan2(
            positions[i].x - positions[i - 1].x,
            positions[i].y - positions[i - 1].y
          );
          at(i).rotation.set(0, angle + (90 * Math.PI) / 180, 0);          
        }        
      }
    }, []);

    return (
      <instancedMesh
        receiveShadow
        castShadow
        ref={ref}        
        args={[undefined, undefined, dominoCountTotal]}
        onPointerEnter={(e) => {
          if (e.instanceId === dominoCountTotal - 1) {
            if (!document.body.classList.contains(HOVER_CLASS)) {
              document.body.classList.add(HOVER_CLASS);              
            }
          }
        }}
        onPointerLeave={(e) => {
          if (e.instanceId === dominoCountTotal - 1) {
            if (document.body.classList.contains(HOVER_CLASS)) {
              document.body.classList.remove(HOVER_CLASS);
            }
          }
        }}
        onClick={(e) => {
          if (e.instanceId === dominoCountTotal - 1) {
            firstDominoRef.current?.applyLocalImpulse([1, 0, 0], [0, 0.5, 0]);
          }
        }}
      >
        <boxGeometry args={args}></boxGeometry>
        <meshStandardMaterial roughness={0.1} color="blue" />
      </instancedMesh>
    );
  };

  return (
    <div className="h-screen w-full">
      <aside className="absolute w-full h-full">
        <Suspense>
          <Canvas
            shadows
            camera={{
              position: [CAM_START.x, CAM_START.y, CAM_START.z + 10],
              fov: 35,
            }}
          >
            <color attach="background" args={["#333"]} />
            <ambientLight intensity={0.25} />
            <spotLight position={[50, 50, -20]} angle={0.15} intensity={3} penumbra={1} castShadow/>
            <pointLight position={[0, 100, -10]} intensity={2} />

            <EffectComposer>
              <DepthOfField
                target={[0, 0, 5]}
                focalLength={0.005}
                bokehScale={5}
              />
              <Bloom mipmapBlur luminanceThreshold={.5} radius={.25} />
            </EffectComposer>
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
        </Suspense>
      </aside>
    </div>
  );
};

export default Hero;
