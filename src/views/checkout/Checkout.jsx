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

  // Controll user, populate orderInfo with "" object or userinfo.

  const [orderInfo, setOrderInfo] = useState({
    firstname: user?.fname || "",
    lastname: user?.lname || "",
    adress: user?.adress || "",
    zipcode: user?.zipCode || "",
    city: user?.city || "",
    phone: user?.phone || "",
    email: user?.email || "",
  });

  //Eventhandler on input fields
  const handleInput = (e) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
  };

  // Submit order function
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
        <form className={styles.checkout_form} onSubmit={handleOrder}>
          {user ? (
            <h3>{user.fname}, controll your information to make a order</h3>
          ) : (
            <h3>Type in your information to make a order</h3>
          )}

          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            defaultValue={orderInfo.firstname}
            placeholder="First name..."
            onChange={handleInput}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            defaultValue={orderInfo.lastname}
            placeholder="Last name..."
            onChange={handleInput}
          />
          <label>Adress</label>
          <input
            type="text"
            name="adress"
            defaultValue={orderInfo.adress}
            placeholder="Address..."
            onChange={handleInput}
          />
          <label>Zip Code</label>
          <input
            type="text"
            name="zipcode"
            defaultValue={orderInfo.zipcode}
            placeholder="Zip code..."
            onChange={handleInput}
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            defaultValue={orderInfo.city}
            placeholder="City..."
            onChange={handleInput}
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            defaultValue={orderInfo.phone}
            placeholder="Phone number..."
            onChange={handleInput}
          />
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            defaultValue={orderInfo.email}
            placeholder="E-mail..."
            onChange={handleInput}
          />
          <button type="submit" className="formButton">
            Confirm order
          </button>
        </form>
      </div>
    </>
  );
};
