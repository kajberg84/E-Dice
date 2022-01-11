import React from 'react';
import { Link } from 'react-router-dom';
import { RoutingPath } from '../../routes/RoutingPath';

// Styles
import styles from './Header.module.css';

// Images
import logo from '../../assets/images/Edice_full_logo.svg';
import cartIcon from '../../assets/images/shopping_cart_icon.svg';

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Link to={RoutingPath.Home}>
            <img src={logo} alt="E-Dice logo" className={styles.header_logo} />
          </Link>
        </div>
        <nav className={styles.header_nav}>
          <Link className={styles.header_nav_item} to={RoutingPath.Home}>
            Shop
          </Link>
          <Link className={styles.header_nav_item} to={RoutingPath.Checkout}>
            Checkout
          </Link>
          <Link className={styles.header_nav_item} to={RoutingPath.Login}>
            Login
          </Link>

          <img
            className={`${styles.header_nav_item} ${styles.header_cart_icon}`}
            src={cartIcon}
            alt="Icon for the cart"
          />
        </nav>
      </div>
    </header>
  );
};
