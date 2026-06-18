import { $api } from "../../api"
import { ProductType } from "../../type"

export class CardEndpointApi {
    static async getProduct(id: string): Promise<ProductType> {
        try {
            const { data } = await $api.get(`shop/products/${id}`)
            return data
        } catch (error) {
            throw error
        }
    }
}