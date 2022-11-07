import { FC, Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PlaneProps,
  SphereProps,
  Triplet,
  WorkerApi,
} from "@react-three/cannon";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import { InstancedMesh, Mesh, Vector2 } from "three";
import { Color } from "three";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";

import getSpiralCoords from "./helpers/spiral.helper";

const Hero: FC = () => {
  const [isHoveringFirstDomino, setIsHoveringFirstDomino] = useState(false);
  const Rig: FC = () => {
    const v = new THREE.Vector3();
    return useFrame((state) => {
      state.camera.position.lerp(
        v.set(10, state.mouse.y * 1.5 + 8, state.mouse.x * 1.5),
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
          opacity={0.125}
        />
      </mesh>
    );
  };

  const Dominos: FC = () => {

    const [initialized, setInitialized] = useState(false)

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

    const firstDominoRef = useRef<WorkerApi | undefined>()

    useEffect(() => {
      
      firstDominoRef.current = at(dominoCountTotal - 1)

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

      setInitialized(true)
    }, []);

    return (
      <instancedMesh
        receiveShadow
        castShadow
        ref={ref}
        args={[undefined, undefined, dominoCountTotal]}
        onClick={(e) => {
          if (e.instanceId === dominoCountTotal - 1) {            
            firstDominoRef.current?.applyLocalImpulse([1,0,0], [0,.5,0])
          }
        }}
        
      >
        <boxGeometry args={args}></boxGeometry>
        <meshStandardMaterial color="orange" />
      </instancedMesh>
    );
  };

  return (
    <div className="h-screen w-full">
      <aside className="absolute w-full h-full">
        <Suspense>
          <Canvas
            shadows
            camera={{ position: [10, 10, 10], fov: 35 }}
            
          >
            <ambientLight intensity={1} />

            {/* <Environment files='/adamsbridge.hdr' /> */}
            {/* <EffectComposer>
              <DepthOfField
                target={[0, 0, 0]}
                focalLength={0.01} // focal length
                bokehScale={8}
              />
            </EffectComposer> */}
            <OrbitControls
              autoRotate
              autoRotateSpeed={0.1}
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 4}
            />
            {/* <Rig /> */}
            <Physics
              allowSleep
              broadphase="Naive"
              iterations={20}
              tolerance={0.0001}
              defaultContactMaterial={{
                friction: 0.005,
                restitution: 0.7,
                contactEquationStiffness: 1e7,
                contactEquationRelaxation: 1,
                frictionEquationStiffness: 1e7,
                frictionEquationRelaxation: 2,
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
