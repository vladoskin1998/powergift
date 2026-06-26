import { $api } from "../../api"
import { ProductType, ShopInfoRes } from "../../type"

export class CatalogEndpointApi {
   static async getCategoriesData (id: string)  {
       try {
           const { data } = await $api.get(`shop/products?categoriesId=${id}`)
           return data
       } catch (error) {
           console.error(error)
       }
   }
   
   static async getAllProduct (){
       try {
           const { data } = await $api.get(`shop/products`)
           return data
       } catch (error) {
           console.error(error)
       }
   }

    static async getInfoShop(): Promise<ShopInfoRes> {
        try {
            const { data } = await $api.get('shop/info')
            return data
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    static async getProduct(id: string): Promise<ProductType> {
        try {
            const { data } = await $api.get(`shop/products/${id}`)
            return data
        } catch (error) {
            throw error
        }
    }
}