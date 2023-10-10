// pages/about.js
import React from "react";
import Navbar from "../components/Navbar";
import styles from "@/styles/About.module.css"; // Create a new CSS module for styling

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>About ClimaGuard</h1>
        <p>
          ClimaGuard is a weather monitoring and notification system designed to
          keep you informed about the current weather conditions and alert you
          if the temperature exceeds or falls below the limits you set.
        </p>
        <p>
          Our mission is to provide users with a personalized weather
          experience, allowing them to stay connected with real-time weather
          updates and receive notifications tailored to their temperature
          preferences.
        </p>
        <p>
          To use ClimaGuard, simply set your desired temperature limits on the
          homepage, and our system will monitor the weather for you. If the
          temperature goes beyond your set limits, you'll receive timely
          notifications, ensuring you're always prepared for the weather
          conditions.
        </p>
        <p>Stay informed, stay safe with ClimaGuard.</p>
      </div>
    </div>
  );
};

export default About;
