import React from 'react'
//images import
import sunny from "../../images/sunny.png"
function WeatherDetails() {
  return (
    <>
    <div className = "weather-icon">
      <img src={sunny} alt="sun" />
    </div>
    <div className = "weather-info">
        <div className>

        </div>
    </div>
    </>
    
  )
}

export default WeatherDetails