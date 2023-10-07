// components/Navbar.js
import React from "react";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>ClimaGuard</div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          About
        </a>
        <a href="#" className={styles.navLink}>
          Team
        </a>
      </div>
      <div className={styles.authLinks}>
        <a href="#" className={styles.navLink}>
          Login
        </a>
        <a href="#" className={styles.navLink}>
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
