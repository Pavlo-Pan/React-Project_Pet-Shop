import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export const getProducts = () => api.get('/products/all');
export const getProductById = id => api.get(`/products/${id}`);
export const getCategories = () => api.get('/categories/all');
export const getCategoryById = id => api.get(`/categories/${id}`);

export async function sendCoupon(values) {
    const response = await fetch("http://localhost:3333/sale/send", {
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
            console.warn("Error:", err);
        }
    }
    if (!response.ok) {
        const msg = payload && payload.message
            ? payload.message
            : `Error ${response.status}`;
        throw new Error(msg);
    }
    return payload;
}
