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
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/About" className={styles.navLink}>
          About
        </Link>
        <Link href="/Team" className={styles.navLink}>
          Team
        </Link>
      </div>
      <div className={styles.authLinks}>
        <Link href="/SignIn" className={styles.navLink}>
          SignIn
        </Link>
        <Link href="/SignUp" className={styles.navLink}>
          SignUp
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
