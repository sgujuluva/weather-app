import { useState, useEffect } from "react";
import WeatherDetails from "../WeatherDetails";

function Search() {
  // use state for storing the inputs from the user
  const [captureInput, setCaptureInput] = useState("chennai");
  //creating obj to grab the values from API
 const [tempInfo, setTempInfo] = useState({});
 
  //function onChange
  const handleChange = (e) => {
    e.preventDefault();
    setCaptureInput(e.target.value);
  };
  //function onSearch fetching API
  const handleSearch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${captureInput}&appid=c061564bbb2741cb21b7b2866d9ac0d9`)
    .then(response => response.json())
    .then(data =>  {
      const {humidity,pressure,temp} = data.main;
      const {main:weatherType} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country,sunrise} = data.sys;
      let newWeatherDetails = {
        "temp" : temp,
        "humidity":humidity,
        "pressure" : pressure,
        "weatherType":weatherType,
        "name":name,
        "speed":speed,
        "country" :country,
        "sunrise":sunrise,
      }
      setTempInfo(newWeatherDetails)
      console.log(tempInfo)
    } 
    
  )};
  // using useeffect calling the API
  useEffect(() => {
    handleSearch();
  },[]); 

  return (
    <>
      <div className="search">
        <input
          onChange={handleChange}
          value={captureInput}
          type="search"
          placeholder="search city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

    { tempInfo ? <WeatherDetails tempInfo = {tempInfo}/> : ""}
   
    </>
  );
}

export default Search;
