import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryById } from '../api/api';

const initialState = {
    category: null,
    products: [],
    status: 'idle',    
    error: null,
    filters: {
        priceFrom: 0,
        priceTo: Infinity,
        discounted: false,
        sortBy: 'default', 
    },
};

export const fetchCategory = createAsyncThunk(
    'categories/fetchCategory',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await getCategoryById(id);
            return data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoryPriceFilter(state, { payload: { from, to } }) {
            state.filters.priceFrom = from;
            state.filters.priceTo = to;
        },
        setCategoryDiscountedFilter(state, { payload }) {
            state.filters.discounted = payload;
        },
        setCategorySortBy(state, { payload }) {
            state.filters.sortBy = payload;
        },
        clearCategory(state) {
            state.category = null;
            state.products = [];
            state.status = 'idle';
            state.error = null;
            state.filters = initialState.filters;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategory.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCategory.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.category = payload.category;
                state.products = payload.data;
            })
            .addCase(fetchCategory.rejected, (state, { payload }) => {
                state.status = 'failed';
                state.error = payload;
            });
    },
});

export const {
    setCategoryPriceFilter,
    setCategoryDiscountedFilter,
    setCategorySortBy,
    clearCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
