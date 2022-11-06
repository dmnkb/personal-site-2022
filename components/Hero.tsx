import { FC, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import type { PlaneProps, SphereProps, Triplet } from "@react-three/cannon"
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon"
import { InstancedMesh, Mesh, Vector2 } from "three"
import { Color } from "three"

// Camera movement
const Rig: FC = () => {
	const v = new THREE.Vector3()
	return useFrame(state => {
		state.camera.position.lerp(
			v.set(state.mouse.x / 2, state.mouse.y / 2 + 8, 10),
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
			<planeGeometry args={[5, 5]} />
			<shadowMaterial
				color={new Color("#B1BD00").convertSRGBToLinear()}
				opacity={0.125}
			/>
		</mesh>
	)
}

// Ball
const Ball: FC<SphereProps & { scale: number }> = ({ scale, ...props }) => {
	const [ref] = useSphere(
		() => ({ ...props, mass: 50, args: [scale] }),
		useRef<Mesh>(null)
	)
	return (
		<mesh ref={ref} receiveShadow>
			<sphereGeometry args={[scale, 64, 64]} />
			<meshLambertMaterial
				color={new Color("#F6FD8C").convertSRGBToLinear()}
			/>
		</mesh>
	)
}

// Dominos
const Dominos: FC = () => {
	const [positions, setPositions] = useState<THREE.Vector2[] | undefined>()
	const [dominoCountTotal, setDominoCountTotal] = useState<number>(0)

	const COILS = 6
	const RADIUS = 8
	const ROTATION = 2 * Math.PI
	const CENTER_X = 0
	const CENTER_Y = 0

	const args: Triplet = [0.175, 1, 0.5]
	const [ref, { at }] = useBox(
		() => ({
			args,
			mass: 0.0025,
			position: [0, 0, 0],
		}),
		useRef<InstancedMesh>(null)
	)

	const calculatePositions = () => {
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
		setPositions(positions)
	}

	useEffect(() => {
		calculatePositions()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!positions || !at) {
			return
		}

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
	}, [positions])

	// TODO: Defer loading untill number of dominos has been calculated by the algorithm
	// if (!dominoCountTotal) {
	// 	return <>Loading...</>
	// }

	return (
		<instancedMesh
			receiveShadow
			castShadow
			ref={ref}
			args={[undefined, undefined, 299]}
			// TODO: See above
			// args={[undefined, undefined, dominoCountTotal]}
		>
			<boxGeometry args={args}></boxGeometry>
			<meshLambertMaterial
				color={new Color("#F6FD8C").convertSRGBToLinear()}
			/>
		</instancedMesh>
	)
}

const Hero: FC = () => {
	return (
		<div className='h-screen w-full'>
			<aside className='absolute w-full h-full'>
				<Canvas
					shadows
					onCreated={({ scene }) => {
						scene.background = new Color("#FDFFF5")
					}}
				>
					<hemisphereLight intensity={0.65} />
					<spotLight
						position={[20, 50, 10]}
						angle={0.3}
						penumbra={1}
						intensity={1}
						castShadow
						shadow-mapSize-width={256}
						shadow-mapSize-height={256}
					/>
					<Rig />
					<Physics gravity={[0, -50, 0]}>
						<Ball
							position={[-20, 1, 10]}
							velocity={[20, 0, -10]}
							scale={1}
						/>
						<Dominos />
						<Plane rotation={[-Math.PI / 2, 0, 0]} />
					</Physics>
				</Canvas>
			</aside>
		</div>
	)
}

export default Hero
