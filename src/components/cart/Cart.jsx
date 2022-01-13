import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import style from "./Cart.module.css";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const count = 2;

  return (
    <div>
      {cart.length <= 0 && <p>Your shopping cart is empty...</p>}
      <ul>
        {cart.map((product) => (
          <li className={style.li_style} key={cart.index}>
            <span>
              {count} {product.title}
            </span>
            <div>{product.price * count} $</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
