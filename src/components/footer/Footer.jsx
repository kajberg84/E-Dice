import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { RoutingPath } from '../../routes/RoutingPath';

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo}>
          <h2>
            <Link to={RoutingPath.Home}>E-dice</Link>
          </h2>
        </div>
        <nav className={styles.footer_nav}>
          <Link className={styles.footer_nav_item} to={RoutingPath.Home}>
            Shop
          </Link>
          <Link className={styles.footer_nav_item} to={RoutingPath.Checkout}>
            Checkout
          </Link>
          <Link className={styles.footer_nav_item} to={RoutingPath.Login}>
            Login
          </Link>
        </nav>
        <nav className={styles.footer_nav}>
          <Link className={styles.footer_nav_item} to={RoutingPath.Terms}>
            Terms and conditions
          </Link>
          <Link className={styles.footer_nav_item} to={RoutingPath.Privacy}>
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};
