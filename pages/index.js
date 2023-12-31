// pages/index.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import WeatherInfo from "../components/WeatherInfo";
import styles from "@/styles/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

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
          <form method="post" action="/maxmin_temp">
            <div className={styles.tempinputCont}>
              <label className={styles.tempLabel}>Max Temperature:</label>
              <FontAwesomeIcon
                icon={faPlusCircle}
                className={styles.customIconLeft}
                onClick={(e) => {
                  const inputElement =
                    e.target.parentElement.parentElement.querySelector(
                      "input[name=max_temp]"
                    );
                  if (inputElement) {
                    inputElement.value = parseInt(inputElement.value) + 1;
                    setMaxTempAlert(e.target.value);
                  }
                }}
              />
              <input
                type="number"
                name="max_temp"
                max={60}
                min={-40}
                value={maxTempAlert}
                onChange={handleMaxTempChange}
                className={styles.tempInput}
              />
              <FontAwesomeIcon
                icon={faMinusCircle}
                className={styles.customIconRight}
                onClick={(e) => {
                  const inputElement =
                    e.target.parentElement.parentElement.querySelector(
                      "input[name=max_temp]"
                    );
                  if (inputElement) {
                    inputElement.value = parseInt(inputElement.value) - 1;
                    setMaxTempAlert(e.target.value);
                  }
                }}
              />
            </div>
            <div className={styles.tempinputCont}>
              <label className={styles.tempLabel}>Min Temperature:</label>
              <FontAwesomeIcon
                icon={faPlusCircle}
                className={styles.customIconLeft}
                onClick={(e) => {
                  const inputElement2 =
                    e.target.parentElement.parentElement.querySelector(
                      "input[name=min_temp]"
                    );
                  if (inputElement2) {
                    inputElement2.value = parseInt(inputElement2.value) + 1;
                    setMinTempAlert(e.target.value);
                  }
                }}
              />
              <input
                type="number"
                name="min_temp"
                value={minTempAlert}
                max={40}
                min={-90}
                onChange={handleMinTempChange}
                className={styles.tempInput}
              />
              <FontAwesomeIcon
                icon={faMinusCircle}
                className={styles.customIconRight}
                onClick={(e) => {
                  const inputElement2 =
                    e.target.parentElement.parentElement.querySelector(
                      "input[name=min_temp]"
                    );
                  if (inputElement2) {
                    inputElement2.value = parseInt(inputElement2.value) - 1;
                    setMinTempAlert(e.target.value);
                  }
                }}
              />
            </div>
          </form>
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
