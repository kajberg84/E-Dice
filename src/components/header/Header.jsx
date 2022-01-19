import React from "react";
import { Link } from "react-router-dom";
import { RoutingPath } from "../../routes/RoutingPath";
import { Navbar } from "../navbar/Navbar";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
// Styles
import styles from "./Header.module.css";

// Images
import logo from "../../assets/images/Edice_full_logo.svg";

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Link to={RoutingPath.Home}>
            <img src={logo} alt="E-Dice logo" className={styles.header_logo} />
          </Link>
        </div>
        {user ? <p>Hello {user.fname}</p> : <p>Guest</p>}
        <Navbar navPosition="Top" />
      </div>
    </header>
  );
};
