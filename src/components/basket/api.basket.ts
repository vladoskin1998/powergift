import { $api } from "../../api"
import { BaskerResponse, OrderForm, ShopInfoRes } from "../../type"

export class BasketApi{

    static async getBasket(): Promise<BaskerResponse>{
        try {
            const {data} = await $api.get('cart')
            return data
        } catch (error) {
            console.error(error)
            throw error
        }
      
    }

    static async addToBasket(dto:{
        product_id:number | string,
        quantity: number | string
    }){
        try {
            const {data} = await $api.post('cart/add',dto)
            return data
        } catch (error) {
            console.error(error)
        }
      
    }

    static async addManyToBasket(dto:{
        product_id:number | string,
        quantity: number | string
    }[]){
        try {
            const {data} = await $api.post('cart/add-many',{items:dto})
            return data
        } catch (error) {
            
            console.error(error)
            throw error
        }
      
    }

    static async deleteAllBasket(){
        try {
            await $api.delete('cart/clear')
        } catch (error) {
            console.error(error)
        }
      
    }
    static async deleteOneBasket(dto: {
        product_id: number | string,
        quantity?: number 
    }) {
        try {
            const { data } = await $api.delete('cart/remove', {
                data: dto,
            });
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    static async makeOrder(dto: OrderForm): Promise<any> {
        try {
            const formData = new FormData()
            const formWithDeliver =  dto 

            for (const key in formWithDeliver) {
                if (Object.prototype.hasOwnProperty.call(formWithDeliver, key)) {
                    formData.append(key, String(formWithDeliver[key as keyof OrderForm]) )
                }
            }
            const { data } = await $api.post('order/create', formData)
            return data
        } catch (error) {
            throw error
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
}