import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import style from "./Basket.module.css";

export const Basket = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div>
      {basket.length <= 0 && <p>Your shopping basket is empty...</p>}
      {basket.map((product) => (
        <ul>
          <li className={style.li_style} key={basket.index}>
            <div>{product.title}</div>
            <div>{product.price} $</div>
          </li>
        </ul>
      ))}
    </div>
  );
};
