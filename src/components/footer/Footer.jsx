import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { RoutingPath } from "../../routes/RoutingPath";
import { Navbar } from "../navbar/Navbar";
import logo from "../../assets/images/Edice_logo_side.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo}>
          <img src={logo} alt="E-Dice logo" />
        </div>
        <Navbar />
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
