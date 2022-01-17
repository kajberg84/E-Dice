// styles
import styles from "./ProductCardSmall.module.css";

export const ProductCardSmall = ({ title, description, quantity, price }) => {
  return (
    <div className={styles.product_card_small_wrapper}>
      <div className={styles.product_card_small_items} style={{ width: "20%" }}>
        <h4>Product:</h4>
        <p>{title}</p>
      </div>
      <div
        className={styles.product_card_small_items}
        style={{ maxWidth: "50%" }}
      >
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
      <div className={styles.product_card_small_items}>
        <h4>Quantity:</h4>
        <p>{quantity}</p>
      </div>
      <div className={styles.product_card_small_items}>
        <h4>Price:</h4>
        <p>{price} $</p>
      </div>
    </div>
  );
};
