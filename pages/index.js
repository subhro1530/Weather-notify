// pages/index.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import WeatherInfo from "../components/WeatherInfo";
import styles from "@/styles/index.module.css";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [maxTempAlert, setMaxTempAlert] = useState(30);
  const [minTempAlert, setMinTempAlert] = useState(10);
  const [nextUpdateCountdown, setNextUpdateCountdown] = useState(300); // 5 minutes in seconds

  const getLocationWeather = async (latitude, longitude) => {
    try {
      const apiKey = "21dd5544b1d3413d9b783038230304";
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  const updateWeatherData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getLocationWeather(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleMaxTempChange = (event) => {
    setMaxTempAlert(event.target.value);
  };

  const handleMinTempChange = (event) => {
    setMinTempAlert(event.target.value);
  };

  const handleNotificationPermission = async () => {
    try {
      if ("Notification" in window) {
        const permission = await Notification.requestPermission();
        console.log("Notification permission:", permission);
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    updateWeatherData();

    // Set interval to fetch data every 5 minutes
    const intervalId = setInterval(() => {
      updateWeatherData();
      setNextUpdateCountdown(300);
    }, 300000); // 300000 milliseconds = 5 minutes

    // Countdown update every second
    const countdownIntervalId = setInterval(() => {
      setNextUpdateCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(intervalId);
      clearInterval(countdownIntervalId);
    };
  }, []);

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.container}>
        {weatherData && weatherData.current ? (
          <WeatherInfo
            location={weatherData.location.name}
            temperature={weatherData.current.temp_c}
            maxTemp={maxTempAlert}
            minTemp={minTempAlert}
            date={weatherData.location.localtime.split(" ")[0]}
            weather={weatherData.current.condition.text}
            humidity={weatherData.current.humidity}
            wind={weatherData.current.wind_kph}
          />
        ) : (
          <p>Loading...</p>
        )}
        <div className={styles.inputSection}>
          <label>
            Max Temperature:
            <input
              type="number"
              value={maxTempAlert}
              onChange={handleMaxTempChange}
            />
          </label>
          <label>
            Min Temperature:
            <input
              type="number"
              value={minTempAlert}
              onChange={handleMinTempChange}
            />
          </label>
          <button onClick={handleNotificationPermission}>
            Enable Notifications
          </button>
        <p>
          Next update in {Math.floor(nextUpdateCountdown / 60)} minutes{" "}
          {nextUpdateCountdown % 60} seconds.
        </p>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Home;