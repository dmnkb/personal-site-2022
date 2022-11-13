import { Vector2 } from "three";

const getSpiralCoords = (
  coils = 6,
  radius = 8,
  rotation = 0.5 * Math.PI,
  centerX = 0,
  centerY = 0
): { positions: Vector2[]; rotations: number[]; totalCount: number } => {
  const thetaMax = coils * 2 * Math.PI;
  const awayStep = radius / thetaMax;
  const CHORD = 0.5;

  let iterations = 0;
  const positions: Vector2[] = [];
  const rotations: number[] = [];

  for (let theta = CHORD / awayStep; theta <= thetaMax; ) {
    const away = awayStep * theta;
    const around = theta + rotation;

    const pos = new Vector2(0, 0);
    pos.set(
      centerX + Math.cos(around) * away,
      centerY + Math.sin(around) * away
    );
    positions.push(new Vector2(pos.x, pos.y));

    if (iterations > 0) {
      const angle = Math.atan2(
        positions[iterations].x - positions[iterations - 1].x,
        positions[iterations].y - positions[iterations - 1].y
      );
      rotations[iterations] = angle + (90 * Math.PI) / 180;
    }

    theta += CHORD / away;
    iterations++;
  }

  return { positions, rotations, totalCount: iterations };
};

export default getSpiralCoords;
