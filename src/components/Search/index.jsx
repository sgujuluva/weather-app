import {useState} from "react";

function Search() {
    // use state for storing the inputs from the user
    const [captureInput, setCaptureInput] = useState("");
  return (
    <div className="search">
      <input onClick = {handleClick} type="search" placeholder="search city" />
      <button>Search</button>
    </div>
  );
}

export default Search;
