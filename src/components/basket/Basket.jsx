import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

export const Basket = () => {
  const { basket } = useContext(BasketContext);
  return <>{basket.length <= 0 && <p>Your shopping basket is empty...</p>}</>;
};
