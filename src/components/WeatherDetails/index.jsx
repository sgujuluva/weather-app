import React, { useEffect, useState } from "react";
//images import
import sunny from "../../images/sunny.png";
import sunRise from "../../images/sunrise.png";
import sunSet from "../../images/sunset.png";
import humidityIcon from "../../images/humidity.png";
import pressureIcon from "../../images/rain-pressure.png";
import windIcon from "../../images/wind.png";
import cloudyImg from "../../images/cloudy.png";
import haze from "../../images/haze.png";
import mist from "../../images/mist.png";
import rainy from "../../images/rainy.png";

const timeFunction = (tempInfo) => {
  if (!Object.keys(tempInfo).length) {
    return { timeStr: "", timeCalc: "", timeSet: "" };
  }
    //converting the sec in min for sunRise
  let sec = tempInfo.sunrise;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  //converting the sec in min for sunSet
  let secSet = tempInfo.sunset;
  let dateSet = new Date(secSet * 1000);
  let timeSet = `${dateSet.getHours()}:${dateSet.getMinutes()}`;
  //dt and timezone calculation
  let timeCalc = new Date(
    (tempInfo.dt + tempInfo.timezone) * 1000
  ).toUTCString();
  return { timeCalc, timeStr, timeSet };
};

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


  const { timeCalc, timeStr, timeSet } = timeFunction(tempInfo);

  return (
    <>
      <div className="weather-card">
        <div className="weather-icon">
          <img src={weatherState} alt="weather icon" />
        </div>
        <div className="weather-info">
          <div className="temperature">
            <span>
              <b>{tempInfo.temp} °</b>
            </span>
          </div>
          <div className="weather-description">
            <div className="weather-condition">{tempInfo.weatherType}</div>
            <div className="city">
              <b>{tempInfo.name} </b> ,<b>{tempInfo.country}</b>
            </div>
          </div>
          {tempInfo ? (
            <div className="date-time">{timeCalc.toString()}</div>
          ) : null}
        </div>
        <br />
        <hr />
        <div className="temp-details">
          <div className="set-rise-info">
            <img src={sunRise} alt="sun icon" />
            <p>
              {timeStr} AM <br /> <b>Sunrise</b>
            </p>
          </div>
          <br />
          <div className="set-set-info">
            <img src={sunSet} alt="sunset icon" />
            <p>
              {timeSet} PM <br /> <b>Sunset</b>
            </p>
          </div>
          <br />

          <div className="humidity">
            <img src={humidityIcon} alt="humid icon" />
            <p>
              {tempInfo.humidity}
              <br /> <b>Humid</b>
            </p>
          </div>

          <br />
          <div className="rain">
            <img src={pressureIcon} alt="rain icon" />
            <p>
              {tempInfo.pressure} <br /> <b>Pressure</b>
            </p>
          </div>

          <br />
          <div className="wind-speed">
            <img src={windIcon} alt="wind icon" />
            <p>
              {tempInfo.speed}
              <br />
              <b>Speed</b>
            </p>
          </div>

          <br />
        </div>
      </div>
    </>
  );
}

export default WeatherDetails;
