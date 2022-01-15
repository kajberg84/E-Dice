import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import style from "./Cart.module.css";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.length <= 0 && <p>Your shopping cart is empty...</p>}
      <ul>
        {cart.map((product, index) => (
          <li className={style.li_style} key={index}>
            <span>
              {product.quantity} {product.title}
            </span>
            <div>{product.price * product.quantity} $</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
