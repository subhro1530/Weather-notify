// components/WeatherAlert.js
import React from "react";

const WeatherAlert = ({ temperature, maxTemp, minTemp }) => {
  return (
    <div>
      <h2>Weather Alert</h2>
      <p>Current Temperature: {temperature}°C</p>
      <p>Max Temperature Alert: {maxTemp}°C</p>
      <p>Min Temperature Alert: {minTemp}°C</p>
      {/* Add more details or styling as needed */}
    </div>
  );
};

export default WeatherAlert;
