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
        <div className = "temperature">
        <span>25°</span>
        </div>
        <div className="weather-description">
            <div className = "weather-condition">Sunny</div>
            <div className="city">Mumbai,IN</div>
        </div>
        <div className="date-time">
          {new Date().toLocaleString()}
        </div>
    </div>
    </>
    
  )
}

export default WeatherDetails