import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const hasItemAlready =
        state.cart.filter((cartItem) => cartItem.id === action.payload.id)
          .length > 0;

      if (!hasItemAlready) {
        const selectedItem = action.payload;

        state.cart.push({
          ...selectedItem,
          quantity: 1,
          totalPrice: selectedItem.pokemons_selling.regular_price,
        });
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.filter((i) => i.id === action.payload.id).at(0);

      item.quantity++;
      item.totalPrice = item.quantity * item.pokemons_selling.regular_price;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((i) => i.id === action.payload.id);
      item.quantity--;
      item.totalPrice = item.quantity * item.regular_price;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  updateProductList,
} = cartSlice.actions;

export default cartSlice.reducer;
