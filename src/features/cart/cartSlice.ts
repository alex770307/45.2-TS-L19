import { createSlice } from '@reduxjs/toolkit';
//import { cartActions } from './cartActions';
import { addToCartAction, removeFromCartAction, clearCartAction } from './cartActions';

export interface ICartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}


interface ICartState {
    cart: ICartItem[];

}

const initialState: ICartState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => addToCartAction(state, action),
        removeFromCart: (state, action) => removeFromCartAction(state, action),
        clearCart: (state) => clearCartAction(state)
    },

});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;