import React from "react";
import { Hero } from "../../components/hero/Hero";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Register.module.css";

// Schema for formvalidating
const registerSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    adress: yup.string().required(),
    city: yup.string().required(),
    zipCode: yup.number().positive().integer().required(),
    phone: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.register_container}>
      <Hero title="Sign Up to E-dice" />

      <div className={styles.register_wrapper}>
        <form
          className={styles.register_form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3>Type in your information to register an account</h3>

          <input
            {...register("firstName")}
            placeholder="Type in your first name"
          />
          <p>{errors.firstName?.message}</p>
          <input
            {...register("lastName")}
            placeholder="Type in your last name"
          />
          <p>{errors.lastName?.message}</p>
          <input {...register("adress")} placeholder="Type in your address" />
          <p>{errors.adress?.message}</p>
          <input {...register("city")} placeholder="Type in your city" />
          <p>{errors.city?.message}</p>
          <input {...register("zipCode")} placeholder="Type in your zip code" />
          <p>{errors.zipCode?.message}</p>
          <input
            {...register("phone")}
            placeholder="Type in your phone number"
          />
          <p>{errors.phone?.message}</p>
          <input
            {...register("email")}
            placeholder="Type in your e-mail address"
          />
          <p>{errors.email?.message}</p>
          <input {...register("password")} placeholder="Choose a password" />
          <p>{errors.password?.message}</p>

          <input
            {...register("confirmPassword")}
            placeholder="Confirm password"
          />
          <p>{errors.confirmPassword?.message}</p>
          <button type="submit" className="formButton">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
