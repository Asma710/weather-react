import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  console.log(props.data);
  function tempMax() {
    let temperatureMax = Math.round(props.data.temp.max);
    return temperatureMax;
  }
  function tempMin() {
    let temperatureMin = Math.round(props.data.temp.min);
    return temperatureMin;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="week Sun">
        <div className="weather-forcast-date">{day()}</div>

        <br />
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <br />
        <div className="weather-forcast-temperatures">
          <span className="weather-forcast-temperatures-max">
            {tempMax()}°/
          </span>
          <span className="weather-forcast-temperature-min">{tempMin()}°</span>
        </div>
      </div>
    </div>
  );
}
