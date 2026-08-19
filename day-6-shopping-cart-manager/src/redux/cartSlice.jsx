import { createSlice } from "@reduxjs/toolkit";
const savedCart = localStorage.getItem("cart");
const initialState = savedCart
  ? JSON.parse(savedCart)
  : {
      items: [
        {
          id: 1,
          name: "Laptop",
          quantity: 1,
          price: 300,
        },
        {
          id: 2,
          name: "Headphones",
          quantity: 1,
          price: 200,
        },
      ],
      totalAmount: 500,
    };
localStorage.getItem("cart");

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
      console.log("Add Item");
    },
    removeItem: (state, action) => {
      console.log("payload", action.payload);

      state.items = state.items.filter((item) => item.id !== action.payload);
      console.log("Item Removed");

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    increaseQuantity: (state, action) => {
      console.log(action.payload);
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    decreaseQuantity: (state, action) => {
      console.log(action.payload);
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity -= 1;
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    clearCart: (state) => {
      ((state.items = []), (state.totalAmount = 0));
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
