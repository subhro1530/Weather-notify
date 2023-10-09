// components/Team.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/WeatherDetails.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainCont}>
        <h1 className={styles.teamnameTitle}>Our Team Name</h1>
        <h2 className={styles.teammembersTitle}>Our Team Members</h2>
        <div className={styles.membersCont}>
          <div className={styles.memberCont}>
            <div className={styles.memberImagecont}>
              <Image
                src="/logo.png"
                height={30}
                width={180}
                classNam={styles.memberImage}
              ></Image>
            </div>
            <div className={styles.memberDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className={styles.memberCont}>
            <div className={styles.memberImagecont}>
              <Image
                src="/logo.png"
                height={30}
                width={180}
                classNam={styles.memberImage}
              ></Image>
            </div>
            <div className={styles.memberDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className={styles.memberCont}>
            <div className={styles.memberImagecont}>
              <Image
                src="/logo.png"
                height={30}
                width={180}
                classNam={styles.memberImage}
              ></Image>
            </div>
            <div className={styles.memberDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className={styles.memberCont}>
            <div className={styles.memberImagecont}>
              <Image
                src="/logo.png"
                height={30}
                width={180}
                classNam={styles.memberImage}
              ></Image>
            </div>
            <div className={styles.memberDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
