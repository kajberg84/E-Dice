import { Hero } from '../../components/hero/Hero';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

// styles
import styles from './Account.module.css';

export const Account = () => {
  const { user, setUser } = useContext(UserContext);

  // Uppdatera så at denna kolla mot userContext
  return (
    <div className={styles.account_container}>
      <Hero title={`Hello ${user.fname}`} />
      <div className={styles.account_wrapper}>
        <div className={styles.account_content}>
          <h2>Find some amazing dices in our shop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            rerum quaerat, ipsa aperiam veritatis qui amet eum at dolor vero
            nemo facere hic corporis tempore voluptatibus? Aliquid similique
            ipsam labore aspernatur est quae, explicabo eius ea quibusdam
            reprehenderit sunt unde.
          </p>
          <Link to="/">
            <button className={styles.account_button}>Shop Dices</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
