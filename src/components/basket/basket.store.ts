import { create } from "zustand";
import { ProductType } from "../../type";

interface BasketState {
    productBasketList: ProductType[],
    addProductBasketList: (product: ProductType, count: number) => void,
    deleteProductBasketList: (id: number) => void
    isOpenBasket: boolean;
    setOpenBasket: (loading: boolean, message?: string) => void;
}

export const useBasketStore = create<BasketState>((set, get) => ({
    isOpenBasket: false,
    productBasketList: JSON.parse(localStorage.getItem("basket") || "[]"),
    setOpenBasket: (state?: boolean) => {
        const isOpen = state === undefined ? get().isOpenBasket : state
        set({ isOpenBasket: isOpen })
    },
    addProductBasketList: (product: ProductType, count: number) => {
        const basket = get().productBasketList
        const findedProduct = basket?.find(item => item.id === product.id)
        const filteredBasket = basket?.filter((item) => item.id !== product.id)

        const findedCount = findedProduct?.count || 0
        const newCount = findedCount + count < 1 ? 1 :  findedCount + count

        const newProductList = [...filteredBasket, { ...product, count:newCount }]
        localStorage.setItem("basket", JSON.stringify(newProductList))
        set({ productBasketList: newProductList })
    },
    deleteProductBasketList: (id: number) => {
        const basket = get().productBasketList
        const filteredBasket = basket?.filter((item) => item.id !== id)
        localStorage.setItem("basket", JSON.stringify(filteredBasket))
        set({ productBasketList: filteredBasket })
    }
}));