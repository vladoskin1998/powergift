import { create } from "zustand";
import { devtools } from "zustand/middleware";


interface LoaderState {
    isLoader: boolean,
    setLoader: (b: boolean) => void,

    messageBasketLoader: string,
    isBasketLoader: boolean;
    setBasketLoader: (b: boolean, m?: string) => void;
}

export const useLoaderStore = create<LoaderState>()(
    devtools((set) => ({
        isLoader: false,
        isBasketLoader: false,
        messageBasketLoader: "",

        setLoader: (dto: boolean) => {
            set({ isLoader: dto }, false, "isLoader");
        },
        setBasketLoader: (b: boolean, m?: string) => {
            set({ isBasketLoader: b, messageBasketLoader: b ? m : ''  }, false, "isBasketLoader");
        }
    }), { name: "AuthStore" })
);
