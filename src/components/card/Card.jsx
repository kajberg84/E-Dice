import React from 'react';
import styles from './Card.module.css';

export const Card = ({ product }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_img_wrapper}>
        <img src={product.img} alt={product.title} />
      </div>
      <div className={styles.card_content_wrapper}>
        <h2 className={styles.card_title}>{product.title}</h2>
        <p className={styles.card_description}>{product.description}</p>
        <h3 className={styles.card_price}>{product.price} $</h3>
        <button className={styles.card_button}>Add to Cart</button>
      </div>
    </div>
  );
};
