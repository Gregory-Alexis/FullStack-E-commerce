const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    total: 0,
    loading: true,
    error: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price;
    },
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { addToCart, setLoading, setError } = cartSlice.actions;
export default cartSlice.reducer;
