import ReactDOM from "react-dom";
import icon from "../../assets/icons/x-circle.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// styles
import styles from "./ProductModal.module.css";

export const ProductModal = ({ product, closeModal }) => {
  const { cart, setCart, total, setTotal } = useContext(CartContext);

  // Add to cart, if product already in cart, increment quantity instead.
  const addToCart = (product) => {
    const checkCartForProduct = cart.findIndex(
      (item) => item.title === product.title
    );

    if (checkCartForProduct !== -1) {
      cart[checkCartForProduct].quantity += 1;
      setTotal(total + 1);
    } else {
      setCart([...cart, product]);
      setTotal(total + 1);
    }
  };

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
            <button
              className={styles.modal_add_to_cart_button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
