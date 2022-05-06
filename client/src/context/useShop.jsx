import { createContext, useContext } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  return <ShopContext.Provider value={{}}>{children}</ShopContext.Provider>;
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
