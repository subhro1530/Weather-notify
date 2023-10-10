// components/Navbar.js
import React from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
          <Image src="/logo.png" height={30} width={220}></Image>
      </div>
      <div className={styles.navLinks}>
        <a href="/" className={styles.navLink}>
          Home
        </a>
        <a href="/About" className={styles.navLink}>
          About
        </a>
        <a href="/Team" className={styles.navLink}>
          Team
        </a>
      </div>
      <div className={styles.authLinks}>
        <a href="/SignIn" className={styles.navLink}>
          SignIn
        </a>
        <a href="/SignUp" className={styles.navLink}>
          SignUp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
