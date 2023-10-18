// components/SignIn.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/SignIn.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import crypto from "crypto";

const SignIn = () => {
  function createDecipherPass(decryptPass) {
    const passphrase = "ClimaGuard";
    const encryptionKey = crypto.pbkdf2Sync(
      passphrase,
      "salt",
      100000,
      16,
      "sha256"
    );
    const encryptionIV = crypto.pbkdf2Sync(
      passphrase,
      "salt",
      100000,
      16,
      "sha256"
    );
    var mykey = crypto.createDecipheriv(
      "aes-128-cbc",
      encryptionKey,
      encryptionIV
    );
    var mystr = mykey.update(decryptPass, "hex", "utf8");
    mystr += mykey.final("utf8");
    return mystr;
  }
  decryptedPass = createDecipherPass();

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
                  <Link href="/SignUp">Create New Account</Link>
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
