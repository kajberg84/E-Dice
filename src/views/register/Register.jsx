import React from 'react';

// Styles
import styles from './Register.module.css';

export const Register = () => {
  return (
    <div className={styles.register_container}>
      <div className={styles.register_wrapper}>
        <h2>Sign Up to E-dice</h2>
        <form className={styles.register_form}>
          <input
            type="text"
            name="first-name"
            placeholder="Type in your first name"
          />
          <input
            type="text"
            name="last-name"
            placeholder="Type in your last name"
          />
          <input
            type="email"
            name="email"
            placeholder="Type in your e-mail address"
          />
          <input
            type="password"
            name="password"
            placeholder="Choose a password"
          />
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm password"
          />
          <input type="button" value="Sign In" />
        </form>
      </div>
    </div>
  );
};
