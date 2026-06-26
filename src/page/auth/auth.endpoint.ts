import { $api } from "../../api";

export class AuthEndpointApi {
    static async login(dto: { email: string; password: string }): Promise<{ token: string, message: string }> {
        try {
            const { data } = await $api.post(`login`, dto)
            return data
        } catch (error) {
            throw error;
        }
    }

    static async logout(): Promise<{message: string}> {
        try{
            const { data } = await $api.post(`logout`)
            return data
        } catch (error) {
            throw error;
        }
    }
}