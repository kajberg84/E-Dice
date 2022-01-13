import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutingPath } from "../../routes/RoutingPath";

import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { BasketContext } from "../../context/BasketContext";
import { Modal } from "../../utils/modal/Modal";
import { removeLocalStorage } from "../../utils/localStorageHandler";
import { Basket } from "../basket/Basket";

// Styles
import styles from "./Navbar.module.css";

// Images
import cartIcon from "../../assets/images/shopping_cart_icon.svg";

export const Navbar = (props) => {
  const { navPosition } = props;

  const [navPositionClicked, setNavPositionClicked] = useState("");
  const { user, setUser } = useContext(UserContext);

  const [modalVisible, setModalvisible] = useState(false);

  const { basket } = useContext(BasketContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStorage("edice-user");
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
    setNavPositionClicked(navPosition);
    console.log(navPositionClicked);
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
        <p> ({basket.length}) </p>
      </nav>
      {modalVisible && (
        <Modal
          passedPosition={navPositionClicked}
          title="Shopping basket"
          content={<Basket />}
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
