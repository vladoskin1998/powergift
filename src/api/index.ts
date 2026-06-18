import axios, { AxiosResponse	 } from 'axios';
import { useAuthStore } from '../page/auth/auth.store';

export const HREF = "https://stage.dev.power-gifts.com.ua/api/"

export const $api = axios.create({
	baseURL: HREF,
	// withCredentials: true,
});

$api.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});


$api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error) => {
         console.log("AXIOS ERROR:", error, error?.config?.url);
      
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            window.location.href = '/'
        }
        console.log(error)
     
        throw error;
    }
);