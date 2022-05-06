export const shopReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "IS_TOGGLE":
      return {
        ...state,
        isToggle: action.payload,
      };
    default:
      return state;
  }
};
