// components/Navbar.js
import React from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
          <div className={styles.logo}>
              <Image src="/logo.png" height={30} width={180}></Image>
      </div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          About
        </a>
        <a href="/Team.js" className={styles.navLink}>
          Team
        </a>
      </div>
      <div className={styles.authLinks}>
        <a href="/SignIn.js" className={styles.navLink}>
          Signin
        </a>
        <a href="/SignUp.js" className={styles.navLink}>
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
