import { Hero } from '../../components/hero/Hero';
import { ProductCardSmall } from '../../components/productcardsmall/ProductCardSmall';

// styles
import styles from './Checkout.module.css';

export const Checkout = () => {
  return (
    <>
      <Hero title="Checkout" />
      <div className={styles.checkout_wrapper}>
        <div className={styles.checkout_product_list}>
          <div className={styles.checkout_product_cart_display}>
            <h2>Your cart</h2>
            <ProductCardSmall
              title="Product 1"
              description="Bananer i mängder"
              price="23"
            />
          </div>
        </div>
        <form className={styles.checkout_form}>
          <h3>Type in your information to make a order</h3>
          <input type="text" name="first-name" placeholder="First name..." />
          <input type="text" name="last-name" placeholder="Last name..." />
          <input type="text" name="adress" placeholder="Address..." />
          <input type="text" name="zip-code" placeholder="Zip code..." />
          <input type="text" name="city" placeholder="City..." />
          <input type="number" name="phone" placeholder="Phone number..." />
          <input type="email" name="email" placeholder="E-mail..." />
          <input type="button" value="Confirm order" />
        </form>
      </div>
    </>
  );
};
