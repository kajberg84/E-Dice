import { Hero } from "../../components/hero/Hero";
import { ProductCardSmall } from "../../components/productcardsmall/ProductCardSmall";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutingPath } from "../../routes/RoutingPath";
// styles
import styles from "./Checkout.module.css";

export const Checkout = () => {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const [orderInfo, setOrderInfo] = useState(
    user
      ? {
          firstname: user.fname,
          lastname: user.lname,
          adress: user.adress,
          zipcode: user.zipCode,
          city: user.city,
          phone: user.phone,
          email: user.email,
        }
      : {
          firstname: "",
          lastname: "",
          adress: "",
          zipcode: "",
          city: "",
          phone: "",
          email: "",
        }
  );

  const handleInput = (e) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    navigate(`../${RoutingPath.OrderConfirmation}`);
    console.log(
      "your order with details:" + JSON.stringify(orderInfo) + " is confirmed"
    );
  };

  return (
    <>
      <Hero title="Checkout" />
      <div className={styles.checkout_wrapper}>
        <div className={styles.checkout_product_list}>
          <div className={styles.checkout_product_cart_display}>
            <h2>Your cart</h2>
            {cart.map((product, index) => (
              <ProductCardSmall
                key={index}
                title={product.title}
                description={product.description}
                quantity={product.quantity}
                price={product.price * product.quantity}
              />
            ))}
          </div>
        </div>
        {!user && (
          <form className={styles.checkout_form} onSubmit={handleOrder}>
            <h3>Type in your information to make a order</h3>
            <input
              type="text"
              name="firstname"
              placeholder="First name..."
              onChange={handleInput}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last name..."
              onChange={handleInput}
            />
            <input
              type="text"
              name="adress"
              placeholder="Address..."
              onChange={handleInput}
            />
            <input
              type="text"
              name="zipcode"
              placeholder="Zip code..."
              onChange={handleInput}
            />
            <input
              type="text"
              name="city"
              placeholder="City..."
              onChange={handleInput}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number..."
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail..."
              onChange={handleInput}
            />
            <button type="submit" className={styles.checkout_button}>
              Confirm order
            </button>
          </form>
        )}
        {user && (
          <form className={styles.checkout_form} onSubmit={handleOrder}>
            <h3>{user.fname}, controll your information to make a order</h3>
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              defaultValue={user.fname}
              placeholder="First name..."
              onChange={handleInput}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              defaultValue={user.lname}
              placeholder="Last name..."
              onChange={handleInput}
            />
            <label>Adress</label>
            <input
              type="text"
              name="adress"
              defaultValue={user.adress}
              placeholder="Address..."
              onChange={handleInput}
            />
            <label>Zip Code</label>
            <input
              type="text"
              name="zipcode"
              defaultValue={user.zipCode}
              placeholder="Zip code..."
              onChange={handleInput}
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              defaultValue={user.city}
              placeholder="City..."
              onChange={handleInput}
            />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              defaultValue={user.phone}
              placeholder="Phone number..."
              onChange={handleInput}
            />
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              placeholder="E-mail..."
              onChange={handleInput}
            />
            <button type="submit" className={styles.checkout_button}>
              Confirm order
            </button>
          </form>
        )}
      </div>
    </>
  );
};
