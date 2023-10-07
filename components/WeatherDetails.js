// components/WeatherDetails.js
import React from "react";
import styles from "@/styles/WeatherDetails.module.css";

const WeatherDetails = ({ time, date, weather, humidity, wind }) => {
  return (
    <div className={styles.weatherDetails}>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Weather:</strong> {weather}
      </p>
      <p>
        <strong>Humidity:</strong> {humidity}%
      </p>
      <p>
        <strong>Wind:</strong> {wind} km/h
      </p>
    </div>
  );
};

export default WeatherDetails;
