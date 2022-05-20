const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    cartProduct: (state, action) => {
      return {
        ...state,
        cart: action.payload,
      };
    },

    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { cartProduct, addToCart, setLoading, setError, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
