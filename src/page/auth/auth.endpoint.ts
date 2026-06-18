import { $api } from "../../api";

export class AuthEndpointApi {
    static async logout(): Promise<{message: string}> {
        try{
            const { data } = await $api.post(`logout`)
            return data
        } catch (error) {
            throw error;
        }
    }
}