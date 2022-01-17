import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import style from "./Cart.module.css";
import plus from "../../assets/icons/add_white_24dp.svg";
import minus from "../../assets/icons/remove_white_24dp.svg";

export const Cart = () => {
  const { cart, total, setTotal } = useContext(CartContext);

  //Funktionalitet för att öka eller minska antalet producter i varukorgen.

  const incrementQuantity = (product) => {
    product.quantity += 1;
    setTotal(total + 1);
  };
  const decrementQuantity = (product) => {
    const checkCartForProduct = cart.findIndex(
      (item) => item.title === product.title
    );
    if (product.quantity > 1) {
      product.quantity -= 1;
      setTotal(total - 1);
    } else if (product.quantity === 1) {
      cart.splice(checkCartForProduct, 1);
      setTotal(total - 1);
    }
  };

  return (
    <div>
      {cart.length <= 0 && <p>Your shopping cart is empty...</p>}
      <ul>
        {cart.map((product, index) => (
          <li className={style.li_style} key={index}>
            <span
              style={{
                width: "50%",
              }}
            >
              {product.quantity} {product.title}
            </span>
            <div
              style={{
                display: "flex",
                width: "18%",
                justifyContent: "space-between",
              }}
            >
              <img
                src={plus}
                alt="increase quantity by 1"
                className={style.cart_button}
                onClick={() => incrementQuantity(product)}
              />

              <img
                src={minus}
                alt="reduce quantity by 1"
                className={style.cart_button}
                onClick={() => decrementQuantity(product)}
              />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              {product.price * product.quantity} $
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
