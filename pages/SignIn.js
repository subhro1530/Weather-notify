// components/SignIn.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/Sign.module.css";
import Navbar from "../components/Navbar";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.signCont}>
          <h1 className={styles.signTitle}>Sign In</h1>
          <form method="POST" action="/userSignin">
            <div className={styles.signInfoItems}>
              <div className={styles.ItemCont}>
                <label>Email : </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={styles.signInemail}
                />
              </div>
              <div className={styles.ItemCont}>
                <label>Password : </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={styles.signInPassword}
                />
              </div>
              <div className={styles.ItemCont2}>
                <button className={styles.signInBtn}>Sign In</button>
                <button className={styles.ForgotPasswordBtn}>
                  Forgot Password
                </button>
                <button className={styles.CreateAccountBtn}>
                  <a href="/SignUp">Create New Account</a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
