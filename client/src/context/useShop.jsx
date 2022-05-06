import { createContext, useContext, useReducer } from "react";
import { shopReducer } from "../reducer/shopReducer";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, {
    data: [],
    loading: true,
    error: "",
    isToggle: false,
    width: window.innerWidth,
  });
  const { data, loading, error, isToggle } = state;
  return (
    <ShopContext.Provider value={{ data, loading, error, isToggle, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error(
      "It seems that you are trying to use ShopContext outside of its provider"
    );
  }
  return context;
};
