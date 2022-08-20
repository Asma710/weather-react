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

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
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
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    console.log(weatherData);
    return (
      <div className="Weather">
        <div className="container">
          <div className="weatherToday">
            <form onSubmit={showCity}>
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    placeholder="Enter Your City"
                    className="mt-4 p-2 ms-3 form-control"
                    onChange={handleCity}
                  />
                </div>
                <div className="col-3">
                  <div className="input-flex">
                    <input
                      type="submit"
                      value="Search"
                      className="button-city"
                    />
                    <input
                      type="submit"
                      value="current"
                      className="button-current"
                      onClick={CurrentPosition}
                    />
                  </div>
                </div>
              </div>
            </form>

            <WeatherInfo info={weatherData} />
          </div>
          <WeatherForecast forecast={weatherData.coordinates} />
        </div>
        <div className="open-sorce">
          <a className="link" href="https://github.com/Asma710/weather-react">
            Open-sorce code
          </a>
          by Asma Mohamed Lamin
        </div>
      </div>
    );
  } else {
    search();
    return "Please waite....";
  }
}
