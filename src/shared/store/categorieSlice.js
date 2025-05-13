import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories, getCategoryById } from '../api/api';
import { API_URL } from '../config/config';
const initialState = {
    list: [],
    listStatus: 'idle',
    listError: null,

    detail: null,
    products: [],
    detailStatus: 'idle',
    detailError: null,

    filters: {
        priceFrom: 0,
        priceTo: Infinity,
        discounted: false,
        sortBy: 'default',
    },
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getCategories();
            return data.map(cat => ({
                ...cat,
                image: `${API_URL}${cat.image}`,
            }));
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

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
        setPriceFilter(state, { payload: { from, to } }) {
            state.filters.priceFrom = from;
            state.filters.priceTo = to;
        },
        setDiscountedFilter(state, { payload }) {
            state.filters.discounted = payload;
        },
        setSortBy(state, { payload }) {
            state.filters.sortBy = payload;
        },
        clearDetail(state) {
            state.detail = null;
            state.products = [];
            state.detailStatus = 'idle';
            state.detailError = null;
            state.filters = initialState.filters;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.listStatus = 'loading';
                state.listError = null;
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.listStatus = 'succeeded';
                state.list = payload;
            })
            .addCase(fetchCategories.rejected, (state, { payload }) => {
                state.listStatus = 'failed';
                state.listError = payload;
            })
            .addCase(fetchCategory.pending, state => {
                state.detailStatus = 'loading';
                state.detailError = null;
            })
            .addCase(fetchCategory.fulfilled, (state, { payload }) => {
                state.detailStatus = 'succeeded';
                state.detail = payload.category;
                state.products = payload.data;
            })
            .addCase(fetchCategory.rejected, (state, { payload }) => {
                state.detailStatus = 'failed';
                state.detailError = payload;
            });
    },
});

export const {
    setPriceFilter,
    setDiscountedFilter,
    setSortBy,
    clearDetail,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
