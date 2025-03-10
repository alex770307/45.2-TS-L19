import { ICartItem } from "./cartSlice";

export const addToCartAction = (state: { cart: ICartItem[] }, action: { payload: ICartItem }) => {
    const existingItem = state.cart.find(item => item.id === action.payload.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ ...action.payload, quantity: 1 });
    }
};

export const removeFromCartAction = (state: { cart: ICartItem[] }, action: { payload: number }) => {
    state.cart = state.cart.filter(item => item.id !== action.payload);
};

export const clearCartAction = (state: { cart: ICartItem[] }) => {
    state.cart = [];
};

export const cartActions = { addToCartAction, removeFromCartAction, clearCartAction };