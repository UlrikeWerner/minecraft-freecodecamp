import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      key: nanoid(),
      pos: [2, 0.5, 2],
      texture: "dirt",
    },
    {
      key: nanoid(),
      pos: [1, 0.5, 2],
      texture: "wood",
    },
  ],
  addCube: (x, y, z) => {
    set((prev) => ({
      cube: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
