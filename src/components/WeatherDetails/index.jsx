import React from "react";
//images import
import sunny from "../../images/sunny.png";
import sunRise from "../../images/sunrise.png";
import humidity from "../../images/humidity.png";
import pressure from "../../images/rain-pressure.png";
import wind from "../../images/wind.png";
function WeatherDetails() {
  return (
    <>
      <div className="weather-icon">
        <img src={sunny} alt="sun" />
      </div>
      <div className="weather-info">
        <div className="temperature">
          <span>25°</span>
        </div>
        <div className="weather-description">
          <div className="weather-condition">Sunny</div>
          <div className="city">Mumbai,IN</div>
        </div>
        <div className="date-time">{new Date().toLocaleString()}</div>
      </div>
      <div className="temp-details">
        <div className="set-rise-info">
         <img src={sunRise} alt="sun icon" />
         <p>6:20 AM <br /> Sunrise</p>
        </div>
        <div className="humidity">
         <img src={humidity} alt="humid icon" />
         <p>20 <br /> Humid</p>
        </div>
        <div className="rain">
         <img src={pressure} alt="rain icon" />
         <p>20 <br /> Pressure</p>
        </div>
        <div className="wind-speed">
         <img src={wind} alt="wind icon" />
         <p>60<br /> Speed</p>
        </div>
      </div>

    </>
  );
}

export default WeatherDetails;
