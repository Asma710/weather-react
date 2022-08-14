import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [description, setDescription] = useState("");
  let [visibility, setVisibility] = useState("");
  let [humidity, setHumidity] = useState("");
  let [tempMax, setTempMax] = useState("");
  let [tempMin, setTempMin] = useState("");
  let [animation, setAnimation] = useState("");
  let [latitude, setLatitude] = useState("");
  let [longitude, setLongitude] = useState("");
  function showCity(event) {
    event.preventDefault();
    let apiKey = "1916e467d6475f3e271325f70b379c90";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setTempMax(response.data.main.temp_max);
    setTempMin(response.data.main.temp_min);
    setVisibility(response.data.visibility);
    setCity(response.data.name);

    setAnimation(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
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

  return (
    <div className="Weather">
      <div className="container">
        <div className="weatherToday">
          <form onSubmit={showCity}>
            <input
              type="text"
              placeholder="Enter Your City"
              className="city"
              onChange={handleCity}
            />

            <input type="submit" value="Search" className="button-city" />
            <input
              type="submit"
              value="current"
              className="button-current"
              onClick={CurrentPosition}
            />
          </form>
          <h1>{city}</h1>
          <div className="time">
            <div className="newTime"></div>
            <div className="hour"></div>
          </div>

          <div>
            <strong className="temperature">{temp}</strong>
            <span className="unitesTemp">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
          </div>
          <img src={animation} alt="sunny" className="float-left" />
          <div className="row">
            <div className="col-4 fs-5">
              Sky
              <div className="rain">
                <span>{description}</span>%
              </div>
            </div>
            <div className="col-4 fs-5">
              Humidity
              <div className="rain">
                <span>{humidity}</span>%
              </div>
            </div>
            <div className="col-4 fs-5">
              Visibility
              <div className="rain">
                <span>{visibility}</span>Km/h
              </div>
            </div>
          </div>
        </div>
        <div className="days">
          <div className="week Sun">
            <div className="weather-forcast-date">Sun</div>

            <br />
            <img src={animation} width="66px" height="55px" alt="img" />
            <br />
            <div className="weather-forcast-temperatures">
              <span className="weather-forcast-temperatures-max">
                {tempMax}/
              </span>
              <span className="weather-forcast-temperature-min">{tempMin}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="open-sorce">
        <a className="link" href="https://github.com/Asma710/weather-react">
          Open-sorce code
        </a>
        by Asma Mohamed Lamin
      </div>
    </div>
  );
}
