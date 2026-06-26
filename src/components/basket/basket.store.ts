import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { BaskerProduct, OrderForm, ProductType } from "../../type";

import { useAuthStore } from "../../page/auth/auth.store";
import { useLoaderStore } from "../loader/loading.store";
import { BasketEndpointApi } from "./basket.endpoint";

interface BasketState {
  makeOrder: (dto: OrderForm) => Promise<void>;

  setProductBasketList: (products: BaskerProduct[]) => void;
  productBasketList: BaskerProduct[];
  addProductBasketList: (product: BaskerProduct, count: number) => void;
  deleteProductBasketList: (s: { product_id: number }) => void;
  isOpenBasket: boolean;
  setOpenBasket: (loading: boolean, message?: string) => void;
}

export const useBasketStore = create<BasketState>()(
  devtools((set, get) => ({
    isOpenBasket: false,
    productBasketList: [],
    total: 0,

    setOpenBasket: (state?: boolean) => {
      const isOpen = state === undefined ? get().isOpenBasket : state;
      set({ isOpenBasket: isOpen }, false, "setOpenBasket");
    },


    setProductBasketList: (products: BaskerProduct[]) => {
      set({ productBasketList: products }, false, "setProductBasketList");
    },

    addProductBasketList: async (product: BaskerProduct, count: number) => {
      try {
        debugger
        const basket = get().productBasketList;
        const isAuth = useAuthStore.getState().isAuth;
        const productPrice = isAuth ? product.partner_price : product.price;
        const newProductList = basket.map((item) => {
          if (item.product_id === product.product_id) {
            const newCount = item.quantity + count < 1 ? 1 : item.quantity + count;
            return { ...item, quantity: newCount };
          }
          return item;
        });

        const exists = basket.some((item) => item.product_id === product.product_id);
        if (!exists) {
          newProductList.push({ ...product, price: productPrice, quantity: count < 1 ? 1 : count });
        }

        const itemsToSend = newProductList.map((it) => ({
          product_id: it.product_id,
          quantity: it.quantity || 1,
          price: isAuth ? it.partner_price : it.price,
        }));

        const response = await BasketEndpointApi.addManyToBasket(itemsToSend);
        useLoaderStore.getState().setBasketLoader(true, response.message);
        set({ productBasketList: newProductList }, false, "addProductBasketList");
      } catch (error: unknown) {
        console.error(error);
        const errorMessage =
          error && typeof error === 'object' && 'response' in error
            ? (error as { response: { data: { message: string } } }).response?.data?.message
            : "Помилка при додаванні товару, зверніться до адміністратора!";
        useLoaderStore.getState().setBasketLoader(true, errorMessage)
      }
      finally {
        setTimeout(() => {
          useLoaderStore.getState().setBasketLoader(false)
        }, 1500)
      }





    },

    deleteProductBasketList: ({ product_id }: { product_id: number }) => {
      const basket = get().productBasketList;
      const findedProduct = basket?.find((item) => item.product_id === product_id);
      const filteredBasket = basket?.filter((item) => item.product_id !== product_id);

      BasketEndpointApi.deleteOneBasket(
        {
          product_id: product_id,
          quantity: findedProduct?.quantity || 1,
        }
      );

      set({ productBasketList: filteredBasket }, false, "deleteProductBasketList");
    },

    makeOrder: async (dto: OrderForm) => {
      try {
        const result = await BasketEndpointApi.makeOrder(dto)
        set({ productBasketList: [] });
        useLoaderStore.getState().setBasketLoader(true, "Ваше замовлення успішне!")
        return result;
      } catch (error) {
        useLoaderStore.getState().setBasketLoader(true, "Помилка при замовленні, зверніться до адміністратора!")
      }
      finally {
        setTimeout(() => {
          useLoaderStore.getState().setBasketLoader(false)
        }, 1000)
      }

    }
  }), { name: "BasketStore" })
);
