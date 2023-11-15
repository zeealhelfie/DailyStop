import React from "react";

const Banner = ({ userName, weather, date }) => {
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
