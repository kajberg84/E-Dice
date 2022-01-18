//Imports
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { getUser } from "../../api/users";
import { setLocalStorage } from "../../utils/localStorageHandler";
import { useNavigate } from "react-router-dom";
import { RoutingPath } from "../../routes/RoutingPath";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Styles
import styles from "./Login.module.css";

// Schema for formvalidating
const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const Login = () => {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  // On submit
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const responseUser = await getUser(data.email, data.password);

      if (!responseUser) {
        alert("Wrong email/ password or no user found");
        return;
      }

      setLocalStorage("edice-user", responseUser);
      setUser(responseUser);
    } catch (error) {
      console.log("Login: ", error);
    }

    navigate(`/${RoutingPath.Account}`);
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrapper}>
        <h2>Sign In to E-dice</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
          <input {...register("email")} placeholder="Type in your email" />
          <p>{errors.email?.message}</p>
          <input
            {...register("password")}
            placeholder="Type in your password"
          />
          <button type="submit" className={`${styles.loginbutton} formButton`}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
