import { useContext, useState, useEffect } from "react";
import { Hero } from "../../components/hero/Hero";
import { ProductCardSmall } from "../../components/productcardsmall/ProductCardSmall";
import { CartContext } from "../../context/CartContext";

// styles
import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = () => {
  const { cart, setCart, setTotal } = useContext(CartContext);
  const [order, setOrder] = useState(cart);

  useEffect(() => {
    setCart([]);
    setTotal(0);
  }, []);

  return (
    <div className={styles.order_confirmation_container}>
      <Hero title={"Order confirmation"} />
      <div className={styles.order_confirmation_wrapper}>
        <div className={styles.order_confirmation_summary}>
          <h3>Order Summary:</h3>
          <h4 className={styles.order_confirmation_heading4}>
            Products ordered:
          </h4>
          {order.map((product, index) => (
            <ProductCardSmall
              key={index}
              title={product.title}
              description={product.description}
              quantity={product.quantity}
              price={product.price * product.quantity}
            />
          ))}
        </div>
        <h2>Thank you for the order</h2>
        <p>We will process your order as soon as possible.</p>
      </div>
    </div>
  );
};
