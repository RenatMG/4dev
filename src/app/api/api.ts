import axios from 'axios';
import { baseUrl } from './url';
import { ACCESS_TOKEN } from '../../shared/config/auth';


const api = axios.create({
    withCredentials: true,
    baseURL: baseUrl(),
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

export default api;
