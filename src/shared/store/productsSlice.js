// shared/store/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api/api';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getProducts(); // data — массив продуктов
            // добавляем хост к каждому image
            return data.map(p => ({
                ...p,
                image: `http://localhost:3333${p.image}`
            }));
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: { items: [], status: 'idle', error: null },
    reducers: { /* ... */ },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;  // здесь уже полные URLs
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default productsSlice.reducer;
