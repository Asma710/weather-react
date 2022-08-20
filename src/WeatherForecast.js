import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForcast(props) {
  console.log(props.forecast);
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    setReady(false);
  }, [props.forecast]);

  function handleForcast(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }
  function forcastSearch() {
    let apiKey = "1916e467d6475f3e271325f70b379c90";
    let latitude = props.forecast.lat;
    let longitude = props.forecast.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForcast);
  }
  if (ready) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForcast, index) {
            if (index < 4) {
              return (
                <div className="col-3">
                  <div className="days" key={index}>
                    <WeatherForecastDay data={dailyForcast} />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    forcastSearch();
    return null;
  }
}
