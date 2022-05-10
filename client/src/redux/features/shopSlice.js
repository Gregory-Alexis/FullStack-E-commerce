const { createSlice } = require("@reduxjs/toolkit");

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    data: [],
    loading: true,
    error: false,
    isToggle: false,
    width: window.innerWidth,
  },
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        data: action.payload,
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
    setIsToggle: (state, action) => {
      return {
        ...state,
        isToggle: action.payload,
      };
    },
    setWidth: (state, action) => {
      return {
        ...state,
        width: action.payload,
      };
    },
  },
});

export const { setData, setLoading, setError, setIsToggle, setWidth } =
  shopSlice.actions;
export default shopSlice.reducer;
