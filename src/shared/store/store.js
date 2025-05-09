import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import categoriesReducer from './categorieSlice';
import categoriesListReducer from './categoriesListSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        categories: categoriesReducer,
        categoriesList: categoriesListReducer,
    }
});
