import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import type { PlaneProps, Triplet } from "@react-three/cannon";

import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import niceColors from "nice-color-palettes";

import { InstancedMesh, Mesh, Vector3 } from "three";
import { Color } from "three";

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2 + 1, 2),
      0.05
    );
  });
}

function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[5, 5]} />

      <shadowMaterial
        color={new Color("#B1BD00").convertSRGBToLinear()}
        opacity={0.125}
      />
    </mesh>
  );
}

type InstancedGeometryProps = {
  number: number;
  size: number;
};

const Boxes = ({ number, size }: InstancedGeometryProps) => {
  const args: Triplet = [size, size, size];
  const [ref, { at }] = useBox(
    () => ({
      args,
      mass: 1,
      position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5],
    }),
    useRef<InstancedMesh>(null)
  );
  useFrame(() =>
    at(Math.floor(Math.random() * number)).position.set(0, Math.random() * 2, 0)
  );
  return (
    <instancedMesh
      receiveShadow
      castShadow
      ref={ref}
      args={[undefined, undefined, number]}
    >
      <boxBufferGeometry args={args}></boxBufferGeometry>
      <meshLambertMaterial color={new Color("#F6FD8C").convertSRGBToLinear()} />
    </instancedMesh>
  );
};

const Hero = () => {
  const [number] = useState(200);
  const [size] = useState(0.1);

  return (
    <div className="h-screen w-full">
      <aside className="absolute w-full h-full">
        <Canvas
          shadows
          onCreated={({ scene }) => (scene.background = new Color("#FDFFF5"))}
        >
          <hemisphereLight intensity={0.65} />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize-width={256}
            shadow-mapSize-height={256}
          />
          <Rig />
          <EffectComposer multisampling={0}>
            <SSAO
              samples={11}
              radius={0.1}
              intensity={50}
              luminanceInfluence={0.6}
              color="#B1BD00"
            />
          </EffectComposer>
          <Physics broadphase="SAP">
            <Plane rotation={[-Math.PI / 2, 0, 0]} />
            <Boxes {...{ number, size }} />
          </Physics>
        </Canvas>
      </aside>
    </div>
  );
};

export default Hero;
