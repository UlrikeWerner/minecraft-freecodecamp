import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export const Player = () => {
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  const playerPosition = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((pos) => (playerPosition.current = pos));
  }, [api.position]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(
        playerPosition.current[0],
        playerPosition.current[1],
        playerPosition.current[2]
      )
    );
  });

  return <mesh ref={ref}></mesh>;
};
