//Imports
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
// Styles
import styles from "./Login.module.css";

export const Login = () => {
  const [userValue, tokenValue] = useContext(UserContext);
  const [user, setUser] = userValue;
  const [userToken, setUserToken] = tokenValue;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //  function loginResponse(userObject) {

  //  }

  //Handling login
  async function handleLogin(e) {
    e.preventDefault();
    // fixa loginvalidation senare
    // const responseFromApi = getUser(userEmail, userPassword);

    console.log("submit form", userEmail, userPassword);
  }

  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrapper}>
        <h2>Sign In to E-dice</h2>
        <form onSubmit={handleLogin} className={styles.login_form} noValidate>
          <input
            type='email'
            name='email'
            placeholder='Type in your email'
            required
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <input
            type='password'
            name='password'
            placeholder='Type in your password'
            required
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <button type='submit' className={`${styles.loginbutton} inputButton`}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
