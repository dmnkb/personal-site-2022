import { Vector2 } from "three";

const getSpiralCoords = (
  coils = 6,
  radius = 8,
  rotation = .5 * Math.PI,
  centerX = 0,
  centerY = 0
): { coords: Vector2[]; totalCount: number } => {
  const thetaMax = coils * 2 * Math.PI;
  const awayStep = radius / thetaMax;
  const CHORD = 0.5;

  let totalCount = 0;
  let coords: Vector2[] = [];

  for (let theta = CHORD / awayStep; theta <= thetaMax; ) {
    let away = awayStep * theta;
    let around = theta + rotation;

    let position = new Vector2(0, 0);
    position.set(
      centerX + Math.cos(around) * away,
      centerY + Math.sin(around) * away
    );
    theta += CHORD / away;

    coords.push(new Vector2(position.x, position.y));
    totalCount++;
  }

  return { coords, totalCount };
};

export default getSpiralCoords