import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { BaskerProduct, OrderForm, ProductType } from "../../type";
import { BasketApi } from "./api.basket";
import { useAuthStore } from "../../page/auth/auth.store";
import { useLoaderStore } from "../loader/loading.store";

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
      console.log('🏪 Store: setProductBasketList called with', products.length, 'products');
      set({ productBasketList: products }, false, "setProductBasketList");
    },

    addProductBasketList: async (product: BaskerProduct, count: number) => {
      try {
        const basket = get().productBasketList;

        const newProductList = basket.map((item) => {
          if (item.product_id === product.product_id) {
            const newCount = item.quantity + count < 1 ? 1 : item.quantity + count;
            return { ...item, quantity: newCount };
          }
          return item;
        });


        const exists = basket.some((item) => item.product_id === product.product_id);
        if (!exists) {
          newProductList.push({ ...product, quantity: count < 1 ? 1 : count });
        }


        try {
          await BasketApi.addManyToBasket(
            newProductList.map((it) => ({
              product_id: it.product_id,
              quantity: it.quantity || 1,
            }))
          );
          useLoaderStore.getState().setBasketLoader(true)
        } catch (error) {
          useLoaderStore.getState().setBasketLoader(true, "Помилка при додаванні товару, зверніться до адміністратора!")
          throw error
        }
        finally {
          setTimeout(() => {
            useLoaderStore.getState().setBasketLoader(false)
          }, 1000)
        }


        set({ productBasketList: newProductList }, false, "addProductBasketList");
      } catch (error) {
        useAuthStore.getState().setOpenAuth(true);
        useLoaderStore.getState().setBasketLoader(true, "Ви ще не авторизовані!")
        setTimeout(() => {
          useLoaderStore.getState().setBasketLoader(false)
        }, 1000)

      }

    },

    deleteProductBasketList: ({ product_id }: { product_id: number }) => {
      const basket = get().productBasketList;
      const findedProduct = basket?.find((item) => item.product_id === product_id);
      const filteredBasket = basket?.filter((item) => item.product_id !== product_id);

      BasketApi.deleteOneBasket(
        {
          product_id: product_id,
          quantity: findedProduct?.quantity || 1,
        }
      );

      set({ productBasketList: filteredBasket }, false, "deleteProductBasketList");
    },

    makeOrder: async (dto: OrderForm) => {
      try {
        const result = await BasketApi.makeOrder(dto)
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
