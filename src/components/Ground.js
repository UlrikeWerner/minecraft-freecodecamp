import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures.js";
import { useStore } from "../hooks/useStore.js";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.repeat.set(100, 100);

  return (
    <mesh
      onClick={(event) => {
        event.stopPropagation();
        const [x, y, z] = Object.values(event.point).map((values) =>
          Math.ceil(values)
        );
        addCube(x, y, z);
      }}
      ref={ref}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
