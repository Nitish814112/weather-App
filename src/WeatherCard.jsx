import React, { useState, useEffect } from "react";

import { 
  WiSunset, 
  WiHumidity, 
  WiNightCloudyWindy, 
  WiDayWindy, 
  WiDaySunny, 
  WiDayCloudyWindy, 
  WiRain 
} from "react-icons/wi";
import { GiHeatHaze } from "react-icons/gi"; // Change 'Gi' to 'gi' (lowercase)

const WeatherCard = ({ weatherReport }) => {
  const [newWeathermood, setNewWeathermood] = useState('');
  const {
    humidity,
    pressure,
    temp,
    name,
    country,
    sunset,
    weathermood,
    speed,
  } = weatherReport;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Haze":
          setNewWeathermood(<GiHeatHaze />); // Make sure to set the component correctly
          break;
        case "Clear":
          setNewWeathermood(<WiDaySunny />);
          break;
        case "Clouds":
          setNewWeathermood(<WiDayCloudyWindy />);
          break;
        case "Rain":
          setNewWeathermood(<WiRain />);
          break;
        default:
          setNewWeathermood(<WiDaySunny />);
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let newtym = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="data-container">
        <div className="weathermood">
          <i className="icon">{newWeathermood}</i>
        </div>
        <div className="temperature-city-time">
          <div className="temperature">{temp} °C</div>
          <div className="city">
            <span id="mood">{weathermood}</span> <br />
            {name},<span id="country"> {country} </span>
          </div>
          <div className="time">{new Date().toDateString()}</div>
        </div>
        <div className="weather-data">
          <div className="sunset">
            <i><WiSunset /></i>
            <h6>{newtym}</h6>
            <h6>sunset</h6>
          </div>
          <div className="humidity">
            <i><WiHumidity /></i>
            <h6>{humidity}</h6>
            <h6>Humidity</h6>
          </div>
          <div className="Pressure">
            <i><WiNightCloudyWindy /></i>
            <h6>{pressure}</h6>
            <h6>Pressure</h6>
          </div>
          <div className="wind">
            <i><WiDayWindy /></i>
            <h6>{speed}</h6>
            <h6>wind</h6>
          </div>
        </div>
      </div>
      <h3 className="footer">
        Made with ❤️ by Nitish ©️ 2023
      </h3>
    </>
  );
};

export default WeatherCard;
