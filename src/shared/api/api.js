import axios from 'axios';
import { API_URL } from '../config/config';


const api = axios.create({
    baseURL: API_URL,
});

export const getProducts = () => api.get('/products/all')
export const getProductById = id => api.get(`/products/${id}`);
export const getCategories = () => api.get('/categories/all');
export const getCategoryById = id => api.get(`/categories/${id}`);

export async function sendCoupon(values) {
    const response = await fetch(`${API_URL}/sale/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
    });

    const text = await response.text();

    let payload = null;
    if (text) {
        try {
            payload = JSON.parse(text);
        } catch (err) {
            console.warn("Error parsing JSON:", err);
        }
    }

    if (!response.ok) {
        const msg = payload?.message || `Error ${response.status}`;
        throw new Error(msg);
    }

    return payload;
}
