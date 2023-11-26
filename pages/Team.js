// components/Team.js
import React from "react";
import styles from "@/styles/Team.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainCont}>
        <h1 className={styles.teamnameTitle}>ClimaGuard</h1>
        <h2 className={styles.teammembersTitle}>Team Members</h2>
        <div className={styles.membersCont}>
          <div className={styles.memberCont}>
            <div className={styles.memberImagecont}>
              <Image
                src="/subhro.jpg"
                height={180}
                width={180}
                className={styles.memberImage}
                alt="Shaswata Saha"
              ></Image>
            </div>
            <div className={styles.memberDesc}>
              <strong>Shaswata Saha</strong>
              <br />
              Front-end Developer, Designer, Cybersecurity Enthusiast. Shaswata
              leads ClimaGuard with a wealth of expertise, ensuring a seamless
              and secure user experience.
            </div>
          </div>
          <div className={styles.memberCont}>
            <div className={styles.memberImagecont}>
              <Image
                src="/pratham.jpg"
                height={180}
                width={180}
                className={styles.memberImage}
                alt="Pratham Agarwal"
              ></Image>
            </div>
            <div className={styles.memberDesc}>
              <strong>Pratham Agarwal</strong>
              <br />
              Web Developer Beginner. Pratham contributes to the team with a
              passion for web development and a drive for innovation.
            </div>
          </div>
          <div className={styles.memberCont}>
            <div className={styles.memberImagecont}>
              <Image
                src="/deep.jpg"
                height={180}
                width={180}
                className={styles.memberImage}
                alt="Deep Ghosal"
              ></Image>
            </div>
            <div className={styles.memberDesc}>
              <strong>Deep Ghosal</strong>
              <br />
              Backend Beginner Developer. Deep plays a crucial role in ensuring
              the robust functionality of ClimaGuard`&apos;`s backend systems.
            </div>
          </div>
          <div className={styles.memberCont}>
            <div className={styles.memberImagecont}>
              <Image
                src="/yatan.jpg"
                height={180}
                width={180}
                className={styles.memberImage}
                alt="Yatan Kumar"
              ></Image>
            </div>
            <div className={styles.memberDesc}>
              <strong>Yatan Kumar</strong>
              <br />
              Beginner Researcher. Yatan brings a fresh perspective to the team
              as a novice researcher, exploring new horizons for ClimaGuard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
