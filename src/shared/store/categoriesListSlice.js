import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../api/api';

const initialState = {
    items: [],
    status: 'idle',   
    error: null,
};

export const fetchCategories = createAsyncThunk(
  'categoriesList/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCategories();  
      const withFullUrls = data.map(cat => ({
        ...cat,
        image: `http://localhost:3333${cat.image}`
      }));
      return withFullUrls;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const categoriesListSlice = createSlice({
    name: 'categoriesList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default categoriesListSlice.reducer;
