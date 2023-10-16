// components/SignIn.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/SignIn.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

const SignIn = () => {
  function caesarCipherDecrypt(text, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        char = char.toUpperCase();

        const charIndex = alphabet.indexOf(char);
        const encryptedIndex = (charIndex + shift) % 26;

        const encryptedChar = alphabet.charAt(encryptedIndex);

        encryptedText += isUpperCase
          ? encryptedChar
          : encryptedChar.toLowerCase();
      } else {
        encryptedText += char;
      }
    }

    return encryptedText;
  }


  //  decryptedPass=caesarCipherDecrypt(query.password,-3);

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
