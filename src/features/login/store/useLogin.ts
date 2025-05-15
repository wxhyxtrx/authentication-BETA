import { create } from "zustand";
import type { ILoginStore } from "../types/loginTypes";

export const useInputFormLoginStore = create<ILoginStore>((set) => ({
  formLogin: {
    email: "",
    password: "",
    remember: false,
  },
  setFormLogin: (value) =>
    set((state) => ({
      formLogin: {
        ...state.formLogin,
        ...value,
      },
    })),
}));
