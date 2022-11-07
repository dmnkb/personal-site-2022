import { FC, Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import type { PlaneProps, SphereProps, Triplet } from "@react-three/cannon"
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon"
import { InstancedMesh, Mesh, Vector2 } from "three"
import { Color } from "three"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"
import { Environment, Lightformer, OrbitControls } from "@react-three/drei"

// Camera movement
const Rig: FC = () => {
	const v = new THREE.Vector3()
	return useFrame(state => {
		state.camera.position.lerp(
			v.set(10, state.mouse.y * 1.5 + 8, state.mouse.x * 1.5),
			0.05
		)
		state.camera.lookAt(new THREE.Vector3(0, 0, 0))
	})
}

// Ground plane (receives shadow)
const Plane: FC<PlaneProps> = props => {
	const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null))
	return (
		<mesh ref={ref} receiveShadow>
			<planeGeometry args={[50, 50]} />
			<shadowMaterial
				color={new Color("#333").convertSRGBToLinear()}
				opacity={0.125}
			/>
		</mesh>
	)
}

// Dominos
const Dominos: FC = () => {
	const [dominoCountTotal, setDominoCountTotal] = useState<number>(0)

	const COILS = 6
	const RADIUS = 8
	const ROTATION = 2 * Math.PI
	const CENTER_X = 0
	const CENTER_Y = 0

	const baubleMaterial = new THREE.MeshLambertMaterial({
		color: "#c0a0a0",
		emissive: "red",
	})

	const args: Triplet = [0.1, 1, 0.5]
	const [ref, { at }] = useBox(
		() => ({
			args,
			mass: 1,
		}),
		useRef<InstancedMesh>(null)
	)

	const calculatePositions = (): Vector2[] => {
		const thetaMax = COILS * 2 * Math.PI
		const awayStep = RADIUS / thetaMax
		const CHORD = 0.5

		let i = 0
		let positions: Vector2[] = []

		for (let theta = CHORD / awayStep; theta <= thetaMax; ) {
			let away = awayStep * theta
			let around = theta + ROTATION

			let position = new THREE.Vector2(0, 0)
			position.set(
				CENTER_X + Math.cos(around) * away,
				CENTER_Y + Math.sin(around) * away
			)
			theta += CHORD / away

			positions.push(new Vector2(position.x, position.y))
			i++
		}
		setDominoCountTotal(i)
		console.log(i)

		return positions
	}

	useEffect(() => {
		let positions = calculatePositions()

		for (let i = 0; i < dominoCountTotal; i++) {
			at(i).position.set(positions[i].x, 0.5, positions[i].y)

			if (i >= 1) {
				let angle = Math.atan2(
					positions[i].x - positions[i - 1].x,
					positions[i].y - positions[i - 1].y
				)
				at(i).rotation.set(0, angle + (90 * Math.PI) / 180, 0)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	})

	// TODO: Defer loading untill number of dominos has been calculated by the algorithm

	return (
		<instancedMesh
			receiveShadow
			castShadow
			ref={ref}
			args={[undefined, undefined, 299]}
			material={baubleMaterial}
			// TODO: See above
			// args={[undefined, undefined, dominoCountTotal]}
		>
			<boxGeometry args={args}></boxGeometry>
		</instancedMesh>
	)
}

const Hero: FC = () => {
	return (
		<div className='h-screen w-full'>
			<aside className='absolute w-full h-full'>
				<Suspense>
					<Canvas
						shadows
						camera={{ position: [0, 10, 20], fov: 35 }}
						onCreated={state =>
							(state.gl.toneMappingExposure = 1.5)
						}
						flat
						linear
					>
						<ambientLight intensity={1} />
						<spotLight
							position={[20, 20, 25]}
							penumbra={1}
							angle={0.2}
							color='white'
							castShadow
							shadow-mapSize={[512, 512]}
						/>
						<directionalLight position={[0, 5, -4]} intensity={4} />
						<directionalLight
							position={[0, -15, -0]}
							intensity={4}
							color='red'
						/>
						{/* <Environment files='/adamsbridge.hdr' /> */}
						{/* <EffectComposer>
							<DepthOfField
								target={[0, 0, 0]}
								focalLength={0.02} // focal length
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
							broadphase='Naive'
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
							{/* <Ball
							position={[8, 0.5, 2]}
							scale={0.25}
							velocity={[0, 0, -1]}
						/> */}
							<Dominos />
							<Plane rotation={[-Math.PI / 2, 0, 0]} />
						</Physics>
					</Canvas>
				</Suspense>
			</aside>
		</div>
	)
}

export default Hero
