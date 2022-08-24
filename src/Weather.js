import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function showCity(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
    console.log(response.data.dt);

    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      visibility: response.data.visibility,
      city: response.data.name,
      coordinates: response.data.coord,

      animation: response.data.weather[0].icon,
    });
    setReady(true);
  }

  function search() {
    let apiKey = "1916e467d6475f3e271325f70b379c90";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    console.log(weatherData);
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={showCity}>
            <div className="row mt-5 ">
              <div className="col-10">
                <input
                  type="text"
                  placeholder="Enter Your City"
                  className=" p-3  form-control"
                  onChange={handleCity}
                />
              </div>
              <div className="col-2">
                <input type="submit" value="Search" className="button-city" />
              </div>
            </div>
          </form>
          <div className="weatherToday">
            <WeatherInfo info={weatherData} />
          </div>
          <WeatherForecast forecast={weatherData.coordinates} />
        </div>
        <div className="open-sorce">
          <a className="link" href="https://github.com/Asma710/weather-react">
            Open-sorce code
          </a>
          <span> by Asma Mohamed Lamin</span>
        </div>
      </div>
    );
  } else {
    search();

    return "Please waite....";
  }
}
