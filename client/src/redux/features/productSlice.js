const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    singleProduct: [],
    product: [],
    quantity: 0,
    total: 0,
    loading: true,
    error: false,
  },
  reducers: {
    setSingleProduct: (state, action) => {
      return {
        singleProduct: action.payload,
        loading: false,
        error: false,
      };
    },
    addToProduct: (state, action) => {
      state.product.push(action.payload);
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

export const { addToProduct, setLoading, setError, setSingleProduct } = productSlice.actions;
export default productSlice.reducer;
