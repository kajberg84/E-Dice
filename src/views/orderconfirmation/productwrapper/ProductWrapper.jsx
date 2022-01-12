// styles
import styles from './ProductWrapper.module.css';

export const ProductWrapper = ({ title, description, price }) => {
  return (
    <div className={styles.product_wrapper}>
      <div className={styles.product_wrapper_items}>
        <h4>Product:</h4>
        <p>{title}</p>
      </div>
      <div className={styles.product_wrapper_items}>
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
      <div className={styles.product_wrapper_items}>
        <h4>Price:</h4>
        <p>{price} $</p>
      </div>
    </div>
  );
};
