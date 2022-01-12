import { useState } from 'react';
import { ProductModal } from '../productmodal/ProductModal';

// styles
import styles from './Card.module.css';

export const Card = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
    console.log('Modal true');
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={styles.card_wrapper}>
        <div onClick={handleModal} className={styles.card_img_wrapper}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={styles.card_content_wrapper}>
          <h2 className={styles.card_title}>{product.title}</h2>
          <p className={styles.card_description}>{product.description}</p>
          <p className={styles.card_material}>Material: {product.material}</p>
          <h3 className={styles.card_price}>{product.price} $</h3>
          <button className={styles.card_button}>Add to Cart</button>
        </div>
      </div>
        {showModal && (
          <ProductModal product={product} closeModal={closeModal} />
        )}
    </>
  );
};
