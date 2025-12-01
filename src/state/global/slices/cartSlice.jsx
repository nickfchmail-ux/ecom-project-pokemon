import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: "",
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const productList = state.productList;

      let item = productList.find((i) => i.id === action.payload);

      state.cart.push({
        ...item,
        quantity: 1,
        totalPrice: item.regularPrice,
      });
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((i) => i.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.regularPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((i) => i.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.regularPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
    updateProductList(state, action) {
      state.productList = action.payload;
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
