import { Hero } from '../../components/hero/Hero';
import { ProductWrapper } from './productwrapper/ProductWrapper';

// styles
import styles from './OrderConfirmation.module.css';

export const OrderConfirmation = () => {
  return (
    <div className={styles.order_confirmation_container}>
      <Hero title={'Order confirmation'} />
      <div className={styles.order_confirmation_wrapper}>
        <div className={styles.order_confirmation_summary}>
          <h3>Order Summary:</h3>
          <h4 className={styles.order_confirmation_heading4}>
            Products ordered:
          </h4>
          <ProductWrapper
            title="Product"
            description="lorem ipsum dolor sit amet"
            price="100"
          />
        </div>
        <h2>Thank you for the order</h2>
        <p>We will process your order as soon as possible.</p>
      </div>
    </div>
  );
};
