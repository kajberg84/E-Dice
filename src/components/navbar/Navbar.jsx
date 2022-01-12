import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutingPath } from "../../routes/RoutingPath";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BasketContext } from "../../context/BasketContext";

// Styles
import styles from "./Navbar.module.css";

// Images
import cartIcon from "../../assets/images/shopping_cart_icon.svg";

export const Navbar = () => {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Hantera logout när loggedIn state och Login sidan är klar
  const handleLogout = () => {
    alert("logging out");
    // navigate(RoutingPath.Login);
  };

  const unAuthNavbar = () => {
    return (
      <>
        <Link className={styles.nav_item} to={RoutingPath.Home}>
          Shop
        </Link>
        <Link className={styles.nav_item} to={RoutingPath.Checkout}>
          Checkout
        </Link>
        <Link className={styles.nav_item} to={RoutingPath.Login}>
          Login
        </Link>
        <Link className={styles.nav_item} to={RoutingPath.Register}>
          Register
        </Link>
      </>
    );
  };

  const authNavbar = () => {
    return (
      <>
        <Link className={styles.nav_item} to={RoutingPath.Home}>
          Shop
        </Link>
        <Link className={styles.nav_item} to={RoutingPath.Checkout}>
          Checkout
        </Link>
        <Link className={styles.nav_item} to={RoutingPath.Account}>
          Account
        </Link>
        <button className={styles.nav_button} onClick={handleLogout}>
          Logout
        </button>
      </>
    );
  };
  return (
    <nav className={styles.nav}>
      {authNavbar()}
      <button className={styles.nav_button}>
        <img
          className={styles.cart_icon}
          src={cartIcon}
          alt="Icon for the cart"
        />
      </button>
    </nav>
  );
};
