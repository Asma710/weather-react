import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [latitude, setLatitude] = useState("");
  let [longitude, setLongitude] = useState("");

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
  function showPosition(position) {
    console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);

    let apiKey = "1916e467d6475f3e271325f70b379c90";
    let apiEndpint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  function CurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
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
            <div className="row mt-2">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Enter Your City"
                  className="mt-4 p-3  form-control"
                  onChange={handleCity}
                />
              </div>
              <div className="col-3">
                <div className="input-flex">
                  <input type="submit" value="Search" className="button-city" />

                  <input
                    type="submit"
                    value="current"
                    className="button-current d-none d-md-block"
                    onClick={CurrentPosition}
                  />
                </div>
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
