import axios from 'axios';

export const HREF = "http://dev.power-gifts.com.ua/api/"

export const $api = axios.create({
	baseURL: HREF,
});

$api.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});
