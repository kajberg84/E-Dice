import { useContext, useState, useEffect } from "react";
import { Hero } from "../../components/hero/Hero";
import { ProductCardSmall } from "../../components/productcardsmall/ProductCardSmall";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";

// styles
import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = () => {
  const { cart, setCart } = useContext(CartContext);
  const [order, setOrder] = useState(cart);

  const { firstname, lastname, address, zipcode, city, phone, email } =
    useParams();

  //Functions for adding prices for a total.
  const multiply = (a, b) => {
    return a * b;
  };

  const allPrices = order.map((product) =>
    multiply(product.price, product.quantity)
  );

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div className={styles.order_confirmation_container}>
      <Hero title={"Order confirmation"} />
      <div className={styles.order_confirmation_wrapper}>
        <h2>Thank you for the order</h2>
        <p>We will process your order as soon as possible.</p>
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
        <div className={styles.total_wrapper}>
          <p className={styles.total}> Total: </p>
          <p className={styles.total}>
            {allPrices.length > 0
              ? allPrices.reduce((total, price) => total + price)
              : "0"}{" "}
            $
          </p>
        </div>
        <h4 className={styles.order_confirmation_heading4}>Delivery Info</h4>
        {firstname && (
          <div>
            <ul>
              <li>
                Name: {firstname}, {lastname}
              </li>
              <li>Address: {address}</li>
              <li>Zip Code: {zipcode}</li>
              <li>City: {city}</li>
              <li>Phone: {phone}</li>
              <li>Email: {email}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
