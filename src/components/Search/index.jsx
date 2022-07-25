import { useState } from "react";
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

  return (
    <>
      <div className="search">
        <input
          onChange={handleChange}
          value={captureInput}
          type="search"
          placeholder="search city"
        />
        <button>Search</button>
      </div>
      <WeatherDetails/>
    </>
  );
}

export default Search;
