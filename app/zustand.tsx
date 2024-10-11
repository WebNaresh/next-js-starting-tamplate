import { create } from "zustand";

type Store = {
  language: "english" | "marathi";
  set_language: (language: "english" | "marathi") => void;
};

const useStore = create<Store>((set) => ({
  language: "english",
  set_language: (language) => set({ language }),
}));

export default useStore;
