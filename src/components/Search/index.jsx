import { useState, useEffect } from "react";
import WeatherDetails from "../WeatherDetails";

function Search() {
  // use state for storing the inputs from the user
  const [captureInput, setCaptureInput] = useState("");
  console.log(captureInput);
  //function onChange
  const handleChange = (e) => {
    e.preventDefault();
    setCaptureInput(e.target.value);
  };
  //function onSearch
  const handleSearch = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${captureInput}&appid=c061564bbb2741cb21b7b2866d9ac0d9`;
  };
  //fetching API using useeffect
  useEffect(() => {
    handleSearch();
  }, []);

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
      <WeatherDetails />
    </>
  );
}

export default Search;
