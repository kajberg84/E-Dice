import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(cart.length);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
