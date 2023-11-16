import React, { useState, useEffect } from "react";

const Banner = ({ userName }) => {
  const [weather, setWeather] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Fetch weather data from your weather API
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          // Replace 'API_KEY' and 'LATITUDE, LONGITUDE' with your actual API key and user's location
          `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8e82f9b5dfd6744e305b326a477905a1`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeather(data.weather[0].description);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    // Fetch date data or perform any other necessary setup
    const currentDate = new Date();
    setDate(currentDate.toDateString());

    // Call the weather API
    fetchWeather();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="Banner">
      <div className="greeting-widget">
        <h2>Hello, {userName}</h2>
      </div>
      <div className="weather-widget">
        <p>Weather: {weather}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  );
};

export default Banner;
