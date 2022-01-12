import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutingPath } from "../../routes/RoutingPath";

import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { BasketContext } from "../../context/BasketContext";
import { Modal } from "../../utils/modal/Modal";

// Styles
import styles from "./Navbar.module.css";

// Images
import cartIcon from "../../assets/images/shopping_cart_icon.svg";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const [modalVisible, setModalvisible] = useState(false);

  const navigate = useNavigate();

  // Hantera logout när loggedIn state och Login sidan är klar
  const handleLogout = () => {
    setUser(null);
    navigate(RoutingPath.Login);
  };

  const unAuthNavbar = () => {
    return (
      <>
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
        <Link className={styles.nav_item} to={RoutingPath.Account}>
          Account
        </Link>
        <button className={styles.nav_button} onClick={handleLogout}>
          Logout
        </button>
      </>
    );
  };

  const showModal = () => {
    setModalvisible(!modalVisible);
  };

  const handleToCheckout = () => {
    navigate(RoutingPath.Checkout);
    setModalvisible(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.nav_item} to={RoutingPath.Home}>
          Shop
        </Link>
        <Link className={styles.nav_item} to={RoutingPath.Checkout}>
          Checkout
        </Link>
        {user ? authNavbar() : unAuthNavbar()}
        <button className={styles.nav_button} onClick={showModal}>
          <img
            className={styles.cart_icon}
            src={cartIcon}
            alt="Icon for the cart"
          />
        </button>
      </nav>
      {modalVisible && (
        <Modal
          title="Shopping basket"
          content="items"
          actions={
            <div>
              <button onClick={() => setModalvisible(false)}>close</button>
              <button onClick={() => handleToCheckout()}> to Checkout</button>
            </div>
          }
        />
      )}
    </>
  );
};
