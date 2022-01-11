// Styles 
import styles from './Login.module.css'

export const Login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrapper}>
        <h2>Sign In to E-dice</h2>
        <form className={styles.login_form}>
          <input type="text" name="username" placeholder="Type in your username"/>
          <input type="password" name="password" placeholder="Type in your password"/>
          <input type="button" value="Sign In" />
        </form>
      </div>
    </div>
  );
};
