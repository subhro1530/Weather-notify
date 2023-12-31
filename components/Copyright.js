// components/Copyright.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/Copyright.module.css";

const Copyright = () => {
  return (
    <div className={styles.copyrightCont}>
      &copy; 2023 <a className={styles.promo} href="acodernamedsubhro.web.app">ACNS</a> || All Rights
      Reserved.
    </div>
  );
};
export default Copyright;