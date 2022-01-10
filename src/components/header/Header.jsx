import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { RoutingPath } from '../../routes/RoutingPath';

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <h2><Link to={RoutingPath.Home}>E-dice</Link></h2>
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
        </nav>
      </div>
    </header>
  );
};
