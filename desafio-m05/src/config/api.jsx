import axios from 'axios';
import { getItem } from '../functions/storage';
const token = getItem('token');

const api = axios.create({
    baseURL: 'https://api-billing-control.vercel.app',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
    }
});

export default api;