import { useState, useEffect } from "react";
import WeatherDetails from "../WeatherDetails";
//function fetch
const apiFetch = async (captureInput) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${captureInput}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  let data = await response.json();

  const { humidity, pressure, temp } = data.main;
  const { main: weatherType } = data.weather[0];
  const { name } = data;
  const { speed } = data.wind;
  const { country, sunrise, sunset } = data.sys;
  const timezone = data.timezone;
  const dt = data.dt;

  let newWeatherDetails = {
    temp: temp,
    humidity: humidity,
    pressure: pressure,
    weatherType: weatherType,
    name: name,
    speed: speed,
    country: country,
    sunrise: sunrise,
    sunset: sunset,
    timezone: timezone,
    dt: dt,
  };
  return newWeatherDetails;
};

function Search() {
  // use state for storing the inputs from the user
  const [captureInput, setCaptureInput] = useState("berlin");
  //creating obj to grab the values from API
  const [tempInfo, setTempInfo] = useState({});

  //function onChange
  const handleChange = (e) => {
    e.preventDefault();
    setCaptureInput(e.target.value);
  };

  //function onSearch fetching API
  const handleSearch = async (e) => {
    e.preventDefault();
    apiFetch(captureInput).then((newWeatherDetails) =>
      setTempInfo(newWeatherDetails)
    );

    console.log(tempInfo);
  };
  // using useeffect calling the API
  useEffect(() => {
    apiFetch(captureInput).then((newWeatherDetails) =>
      setTempInfo(newWeatherDetails)
    );
  }, []);

  return (
    <>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            onChange={handleChange}
            value={captureInput}
            type="search"
            placeholder="search city"
          />
          <button>Search</button>
        </form>
      </div>

      <WeatherDetails tempInfo={tempInfo} />
    </>
  );
}

export default Search;
