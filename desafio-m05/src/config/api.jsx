import axios from 'axios';
import { getItem } from '../functions/storage';
const token = getItem('token');

const api = axios.create({
    baseURL: import.meta.env.VITE_PROD,
    timeout: 10000,
    headers: { 
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}` 
    }
});
export default api;