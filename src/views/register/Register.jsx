import React from 'react';
import { Hero } from '../../components/hero/Hero';

// Styles
import styles from './Register.module.css';

export const Register = () => {
  return (
    <div className={styles.register_container}>
      <Hero title="Sign Up to E-dice" />
      <div className={styles.register_wrapper}>
        <form className={styles.register_form}>
          <h3>Type in your information to register an account</h3>
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
          <input type="text" name="adress" placeholder="Type in your address" />
          <input type="text" name="city" placeholder="Type in your city" />
          <input
            type="text"
            name="zip-code"
            placeholder="Type in your zip code"
          />
          <input
            type="number"
            name="phone"
            placeholder="Type in your phone number"
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
          <input type="button" value="Create Account" />
        </form>
      </div>
    </div>
  );
};
