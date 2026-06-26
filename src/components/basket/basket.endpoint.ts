import { $api } from "../../api"
import { BaskerResponse, OrderForm, ShopInfoRes } from "../../type"


export interface OrderResponse {
    success: boolean
    message: string
    order: Order
    errors: null | object
}

interface OrderInfo {
    status: string
    status_name: string
    order_type: string
    order_type_name: string
    comment: string | null
    total_amount: number
    created_at: string
}

interface OrderDelivery {
    method_id: string
    method_name: string
    country: string
    region: string
    city: string
    address: string | null
    warehouse: string | null
    name: string
    lastname: string
    phone: string
}

interface OrderUser {
    id: number
    name: string
    lastname: string | null
}

interface OrderProduct {
    id: number
    product_id: number
    sku: string
    name: string
    image: string
    images: string[]
    thumbnails: {
        small: string
        thumb: string
    }
    quantity: number
    price: string
    total: string
}

interface Order {
    id: number
    crm_id: number
    info: OrderInfo
    delivery: OrderDelivery
    user: OrderUser
    products: OrderProduct[]
}

export class BasketEndpointApi {
    static async getBasket(): Promise<BaskerResponse> {
        try {
            const { data } = await $api.get('cart')
            return data
        } catch (error) {
            console.error(error)
            throw error
        }

    }

    static async addToBasket(dto: {
        product_id: number | string,
        quantity: number | string
    }) {
        try {
            const { data } = await $api.post('cart/add', dto)
            return data
        } catch (error) {
            console.error(error)
        }

    }

    static async addManyToBasket(dto: {
        product_id: number | string,
        quantity: number | string
    }[]): Promise<{message: string}> {
        try {
            const { data } = await $api.post('cart/add-many', { items: dto })
            return data
        } catch (error) {

            throw error
        }

    }

    static async deleteAllBasket() {
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

    static async makeOrder(dto: OrderForm): Promise<OrderResponse> {
        try {
            const formData = new FormData()
            const formWithDeliver = dto

            for (const key in formWithDeliver) {
                if (Object.prototype.hasOwnProperty.call(formWithDeliver, key)) {
                    formData.append(key, String(formWithDeliver[key as keyof OrderForm]))
                }
            }
            const response = await $api.post('order/create', formData)
            // console.log('response from ', typeof response.data)
            return response.data
        } catch (error) {
            console.log('submit error', error)
            throw error
        }
    }


    static async getDeliveryMethods(): Promise<{ message: string }> {
        try {
            const { data } = await $api.get(`delivery-methods`)
            return data
        } catch (error) {
            throw error
        }
    }
}
