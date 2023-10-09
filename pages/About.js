// components/About.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/About.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainCont}>
        <div className={styles.aboutCont}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              height={30}
              width={180}
              classNam={styles.memberImage}
            ></Image>
          </div>
          <div className={styles.DescContainer}>
            Website description from chatgpt
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
