// components/SignIn.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/SignIn.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

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
                <label className={styles.signUpLabel} htmlFor="signInemail">
                  Email :{" "}
                </label>
                <input
                  type="email"
                  name="signInemail"
                  placeholder="Enter your email"
                  className={styles.signInemail}
                />
              </div>
              <div className={styles.ItemCont}>
                <label className={styles.signUpLabel} htmlFor="signInpassword">
                  Password :{" "}
                </label>
                <input
                  type="password"
                  name="signInpassword"
                  placeholder="Enter your password"
                  className={styles.signInPassword}
                />
              </div>
              <div className={styles.ItemCont2}>
                <button className={styles.signInBtn}>Sign In</button>
                <div className={styles.ItemCont1}>
                  <button className={styles.ForgotPasswordBtn}>
                    Forgot Password,
                  </button>
                  <button className={styles.CreateAccountBtn}>
                    <Link href="/SignUp" className={styles.signUpLink}>
                      Create New Account
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
