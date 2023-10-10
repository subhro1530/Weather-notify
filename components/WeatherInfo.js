// components/WeatherInfo.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/WeatherInfo.module.css";

const WeatherInfo = ({
  location,
  temperature,
  maxTemp,
  minTemp,
  date,
  weather,
  humidity,
  wind,
}) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    // Update the time every minute (adjust the interval as needed)
    const intervalId = setInterval(() => {
      console.log("Updating time...");
      const newTime = new Date().toLocaleTimeString();
      console.log("New time:", newTime);
      setCurrentTime(newTime);
    }, 60000); // 60000 milliseconds = 1 minute

    return () => {
      // Cleanup the interval on component unmount
      console.log("Clearing interval...");
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className={styles.weatherInfo}>
      <h2 className={styles.heading}>Weather Information</h2>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Current Temperature:</strong> {temperature}°C
      </p>
      <p>
        <strong>Max Temperature Alert:</strong> {maxTemp}°C
      </p>
      <p>
        <strong>Min Temperature Alert:</strong> {minTemp}°C
      </p>
      <p>
        <strong>Time:</strong> {currentTime}
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

export default WeatherInfo;
