import React, {useState} from "react";
//images import
import sunny from "../../images/sunny.png";
import sunRise from "../../images/sunrise.png";
import humidityIcon from "../../images/humidity.png";
import pressureIcon from "../../images/rain-pressure.png";
import windIcon from "../../images/wind.png";

function WeatherDetails({temp,humidity,pressure,weatherType,name,speed,country,sunrise}) {
  //
  const [weatherState, setWeatherState] = useState("");
  return (
    <>
      <div className="weather-icon">
        <img src={sunny} alt="sun" />
      </div>
      <div className="weather-info">
        <div className="temperature">
          <span>{temp}°</span>
        </div>
        <div className="weather-description">
          <div className="weather-condition">{weatherType}</div>
          <div className="city">{name}{country}</div>
        </div>
        <div className="date-time">{new Date().toLocaleString()}</div>
      </div>
      <div className="temp-details">
        <div className="set-rise-info">
         <img src={sunRise} alt="sun icon" />
         <p>{sunrise} <br /> Sunrise</p>
        </div>
        <div className="humidity">
         <img src={humidityIcon} alt="humid icon" />
         <p>{humidity}<br /> Humid</p>
        </div>
        <div className="rain">
         <img src={pressureIcon} alt="rain icon" />
         <p>{pressure} <br /> Pressure</p>
        </div>
        <div className="wind-speed">
         <img src={windIcon} alt="wind icon" />
         <p>{speed}<br /> Speed</p>
        </div>
      </div>

    </>
  );
}

export default WeatherDetails;
