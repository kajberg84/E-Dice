import ReactDOM from "react-dom";
import icon from "../../assets/icons/x-circle.svg";

import { AddToCartButton } from "../addToCartButton/AddToCartButton";

// styles
import styles from "./ProductModal.module.css";

export const ProductModal = ({ product, closeModal }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal_backdrop}>
      <div className={styles.modal}>
        <div className={styles.modal_img_wrapper}>
          <img src={product.img} alt={product.title} />
        </div>

        <div className={styles.modal_content_container}>
          <div className={styles.modal_close}>
            <img
              src={icon}
              alt="Modal close icon"
              className={styles.modal_close_icon}
              onClick={closeModal}
            />
          </div>

          <div className={styles.modal_content_wrapper}>
            <h2 className={styles.modal_title}>{product.title}</h2>
            <p className={styles.modal_description}>{product.description}</p>
            <p className={styles.modal_material}>
              Material: {product.material}
            </p>
            <h3 className={styles.modal_price}>{product.price} $</h3>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
