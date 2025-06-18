import { create } from "zustand";
import { devtools } from "zustand/middleware";


interface AuthState {
  isAuth:boolean, 
  setIsAuth: () => void,
  openAuth: boolean;
  setOpenAuth: (loading: boolean, message?: string) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set, get) => ({
    openAuth: false,
    isAuth: false,

    setOpenAuth: (state?: boolean) => {
      const isOpen = state === undefined ? get().openAuth : state;
      set({ openAuth: isOpen }, false, "open modal");
    },
    setIsAuth: (state?: boolean) => {
      const token = localStorage.getItem("token")
      set({  isAuth: !!token }, false, "auth state");
    }
  }), { name: "AuthStore" })
);
