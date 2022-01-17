import { Hero } from "../../components/hero/Hero";
import { ProductCardSmall } from "../../components/productcardsmall/ProductCardSmall";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

// styles
import styles from "./Checkout.module.css";

export const Checkout = () => {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  return (
    <>
      <Hero title="Checkout" />
      <div className={styles.checkout_wrapper}>
        <div className={styles.checkout_product_list}>
          <div className={styles.checkout_product_cart_display}>
            <h2>Your cart</h2>
            {cart.map((product) => (
              <ProductCardSmall
                title={product.title}
                description={product.description}
                quantity={product.quantity}
                price={product.price * product.quantity}
              />
            ))}
          </div>
        </div>
        {!user && (
          <form className={styles.checkout_form}>
            <h3>Type in your information to make a order</h3>
            <input type="text" name="first-name" placeholder="First name..." />
            <input type="text" name="last-name" placeholder="Last name..." />
            <input type="text" name="adress" placeholder="Address..." />
            <input type="text" name="zip-code" placeholder="Zip code..." />
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="phone" placeholder="Phone number..." />
            <input type="email" name="email" placeholder="E-mail..." />
            <input type="button" value="Confirm order" />
          </form>
        )}
        {user && (
          <form className={styles.checkout_form}>
            <h3>{user.fname}, controll your information to make a order</h3>
            <label>First Name</label>
            <input
              type="text"
              name="first-name"
              defaultValue={user.fname}
              placeholder="First name..."
            />
            <label>Last Name</label>
            <input
              type="text"
              name="last-name"
              defaultValue={user.lname}
              placeholder="Last name..."
            />
            <label>Adress</label>
            <input
              type="text"
              name="adress"
              defaultValue={user.adress}
              placeholder="Address..."
            />
            <label>Zip Code</label>
            <input
              type="text"
              name="zip-code"
              defaultValue={user.zipCode}
              placeholder="Zip code..."
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              defaultValue={user.city}
              placeholder="City..."
            />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              defaultValue={user.phone}
              placeholder="Phone number..."
            />
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              placeholder="E-mail..."
            />
            <input type="button" value="Confirm order" />
          </form>
        )}
      </div>
    </>
  );
};
