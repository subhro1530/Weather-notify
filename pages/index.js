// pages/index.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import WeatherAlert from "../components/WeatherAlert";
import WeatherDetails from "../components/WeatherDetails";
import styles from "@/styles/index.module.css";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [maxTempAlert, setMaxTempAlert] = useState(30);
  const [minTempAlert, setMinTempAlert] = useState(10);

  const getLocationWeather = async (latitude, longitude) => {
    try {
      const apiKey = "21dd5544b1d3413d9b783038230304";
    //   const apiKey = process.env.REACT_APP_WEATHERAPI_KEY;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
      );
      const data = await response.json();
      console.log("Weather Data:", data); // Log the received data
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>ClimaGuard</h1>
        {weatherData && weatherData.current ? (
          <>
            <WeatherAlert
              temperature={weatherData.current.temp_c}
              maxTemp={maxTempAlert}
              minTemp={minTempAlert}
            />
            <WeatherDetails
              time={weatherData.location.localtime}
              date={weatherData.location.localtime.split(" ")[0]}
              weather={weatherData.current.condition.text}
              humidity={weatherData.current.humidity}
              wind={weatherData.current.wind_kph}
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
        {/* Add user permission modal and other components */}
      </div>
    </div>
  );
};

export default Home;