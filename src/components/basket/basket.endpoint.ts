import { $api } from "../../api"

export class BasketEndpointApi {
    static async getDeliveryMethods(): Promise<{ message: string }> {
        try {
            const { data } = await $api.get(`delivery-methods`)
            return data
        } catch (error) {
            throw error
        }
    }
}
