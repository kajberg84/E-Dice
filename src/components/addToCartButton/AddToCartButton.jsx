import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./addToCartButton.module.css";

export const AddToCartButton = (props) => {
  const { cart, setCart, total, setTotal } = useContext(CartContext);

  const { product } = props;

  // Add to cart, if product already in cart, increment quantity instead.

  const addToCart = (product) => {
    const checkCartForProduct = cart.findIndex(
      (item) => item.title === product.title
    );

    if (checkCartForProduct !== -1) {
      cart[checkCartForProduct].quantity += 1;
      setTotal(total + 1);
    } else {
      setCart([...cart, product]);
      setTotal(total + 1);
    }
  };

  return (
    <>
      {" "}
      <button className={styles.card_button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </>
  );
};
