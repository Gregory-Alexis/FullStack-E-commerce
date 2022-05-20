const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    singleProduct: [],
    quantity: 1,
  },
  reducers: {
    setSingleProduct: (state, action) => {
      return {
        ...state,
        singleProduct: action.payload,
        loading: false,
        error: false,
      };
    },
    setQuantity: (state, action) => {
      return {
        ...state,
        quantity: action.payload,
      };
    },
  },
});

export const {
  addToProduct,
  setLoading,
  setError,
  setSingleProduct,
  setQuantity,
} = productSlice.actions;
export default productSlice.reducer;
