import { Hero } from "../../components/hero/Hero";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

// styles
import styles from "./Account.module.css";

export const Account = () => {
  const { user } = useContext(UserContext);

  // Uppdatera så at denna kolla mot userContext
  return (
    <div className={styles.account_container}>
      {user && <Hero title={`Hello ${user.fname}`} />}

      <div className={styles.account_wrapper}>
        <div className={styles.account_content}>
          <h2>Find some amazing dice sets in our shop</h2>
          <p>It's time to find out how you roll! </p>
          <p>
            We pride ourselves on our well balanced and beautiful dice. Check
            out our shop to get yours today!
          </p>
          <Link to="/">
            <button className={styles.account_button}>Shop Dices</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
