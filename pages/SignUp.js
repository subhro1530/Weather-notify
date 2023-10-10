// components/SignUp.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/SignUp.module.css";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.signCont}>
          <h1 className={styles.signTitle}>Sign Up</h1>
          <form method="POST" action="/">
            <div className={styles.signInfoItems}>
              <div className={styles.ItemCont}>
                <label>First Name : </label>
                <input
                  type="first name"
                  name="text"
                  placeholder="Enter your first name"
                  className={styles.firstName}
                />
              </div>
              <div className={styles.ItemCont}>
                <label>Last Name : </label>
                <input
                  type="last name"
                  name="text"
                  placeholder="Enter your last name"
                  className={styles.firstName}
                />
              </div>
              <div className={styles.ItemCont}>
                <label>Email : </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={styles.signUpemail}
                />
              </div>
              <div className={styles.ItemCont}>
                <label>Password : </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={styles.signUpPassword}
                />
              </div>
              <div className={styles.ItemCont}>
                <label>Confirm Password : </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={styles.signUpPassword}
                />
              </div>
              <div className={styles.ItemCont}>
                <label>Phone Number : </label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className={styles.signUpPassword}
                />
              </div>
              <div className={styles.ItemCont}>
                <button className={styles.signInBtn}>Sign Up</button>

                <button className={styles.CreateAccountBtn}>
                  Already Registered
                  <a href="/SignIn">Log In</a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
