import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {},      
    totalQty: 0,
    totalPrice: 0,
};

const recalcTotals = (state) => {
    let qty = 0, sum = 0;
    Object.values(state.items).forEach(({ product, qty: q }) => {
        qty += q;
        sum += product.price * q;
    });
    state.totalQty = qty;
    state.totalPrice = sum;
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const id = product.id;
            if (state.items[id]) {
                state.items[id].qty += 1;
            } else {
                state.items[id] = { product, qty: 1 };
            }
            recalcTotals(state);
        },
        removeFromCart(state, action) {
            delete state.items[action.payload];
            recalcTotals(state);
        },
        incrementQty(state, action) {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id].qty += 1;
                recalcTotals(state);
            }
        },
        decrementQty(state, action) {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id].qty -= 1;
                if (state.items[id].qty <= 0) {
                    delete state.items[id];
                }
                recalcTotals(state);
            }
        },
        clearCart(state) {
            state.items = {};
            state.totalQty = 0;
            state.totalPrice = 0;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQty,
    decrementQty,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
