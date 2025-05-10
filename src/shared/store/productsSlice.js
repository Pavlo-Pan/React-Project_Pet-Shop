import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts, getProductById } from '../api/api'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getProducts()
            return data
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message)
        }
    }
)

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await getProductById(id)
            return data[0]
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message)
        }
    }
)
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        currentProduct: null,
        status: 'idle',
        error: null
    },
    reducers: {

        clearCurrentProduct(state) {
            state.currentProduct = null
            state.status = 'idle'
            state.error = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(fetchProductById.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.currentProduct = action.payload
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { clearCurrentProduct } = productsSlice.actions
export default productsSlice.reducer
