import { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket }}>
        {children}
      </BasketContext.Provider>
    </>
  );
};

export default BasketProvider;
