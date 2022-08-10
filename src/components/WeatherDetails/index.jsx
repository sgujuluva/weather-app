import React, { useEffect, useState } from "react";
//images import
import sunny from "../../images/sunny.png";
import sunRise from "../../images/sunrise.png";
import humidityIcon from "../../images/humidity.png";
import pressureIcon from "../../images/rain-pressure.png";
import windIcon from "../../images/wind.png";
import cloudyImg from "../../images/cloudy.png";
import haze from "../../images/haze.png";
import mist from "../../images/mist.png";
import rainy from "../../images/rainy.png";

function WeatherDetails({ tempInfo }) {
  //for changing icons
  const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (tempInfo.weatherType) {
      switch (tempInfo.weatherType) {
        case "Clouds":
          setWeatherState(cloudyImg);
          break;
        case "Haze":
          setWeatherState(haze);
          break;
        case "Clear":
          setWeatherState(sunny);
          break;
        case "Mist":
          setWeatherState(mist);
          break;
        case "Rain":
          setWeatherState(rainy);
          break;
        default:
          setWeatherState(sunny);
          break;
      }
    }
  }, [tempInfo.weatherType]);
  //converting the sec in min
  let sec = tempInfo.sunrise;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    <div className = "weather-card">
      <div className="weather-icon">
   
        <img src={weatherState} alt="weather icon" />
      </div>
      <div className="weather-info">
        <div className="temperature">
          <span>{tempInfo.temp} °</span>
        </div>
        <div className="weather-description">
          <div className="weather-condition">{tempInfo.weatherType}</div>
          <div className="city">
            {tempInfo.name} , {tempInfo.country}
          </div>
        </div>
        <div className="date-time">{new Date().toLocaleString()}</div>
      </div>
      <hr/>
      <div className="temp-details">
        <div className="set-rise-info">
          <img src={sunRise} alt="sun icon" />
          <p>
            {timeStr} AM <br /> Sunrise
          </p>
        </div>
        <div className="humidity">
          <img src={humidityIcon} alt="humid icon" />
          <p>
            {tempInfo.humidity}
            <br /> Humid
          </p>
        </div>
        <div className="rain">
          <img src={pressureIcon} alt="rain icon" />
          <p>
            {tempInfo.pressure} <br /> Pressure
          </p>
        </div>
        <div className="wind-speed">
          <img src={windIcon} alt="wind icon" />
          <p>
            {tempInfo.speed}
            <br /> Speed
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default WeatherDetails;
