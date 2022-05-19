const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    singleProduct: [],
    loading: true,
    error: false,
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

export const { addToProduct, setLoading, setError, setSingleProduct } =
  productSlice.actions;
export default productSlice.reducer;
