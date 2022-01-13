//Imports
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { getUser } from "../../api/users";
import { setLocalStorage } from "../../utils/localStorageHandler";
import { useNavigate } from "react-router-dom";
import { RoutingPath } from '../../routes/RoutingPath';
// Styles
import styles from "./Login.module.css";

export const Login = () => {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //Handling login
  async function handleLogin(e) {
    e.preventDefault();

    //validate input ( fixa en bättre lösning )
    if (userEmail === "" || userPassword === "") {
      alert("Please enter your email and password");
      return;
    }

    try {
      const responseUser = await getUser(userEmail, userPassword);
      if (!responseUser) {
        console.log("Not correct validation or no user", responseUser);
        alert("Wrong email/ password or no user");
        return;
      }

      console.log("user: ", responseUser);
      setLocalStorage("edice-user", responseUser);
      setUser(responseUser);
    } catch (error) {
      console.log("Login: ", error);
    }

    navigate(`/${RoutingPath.Account}`)
    // navigate("/account")
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
