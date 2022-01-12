import React from "react";
import { Link } from "react-router-dom";
import { RoutingPath } from "../../routes/RoutingPath";
import { Navbar } from "../navbar/Navbar";

// Styles
import styles from "./Header.module.css";

// Images
import logo from "../../assets/images/Edice_full_logo.svg";
import cartIcon from "../../assets/images/shopping_cart_icon.svg";

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Link to={RoutingPath.Home}>
            <img src={logo} alt="E-Dice logo" className={styles.header_logo} />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
