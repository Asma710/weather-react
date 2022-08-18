import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForcast(props) {
  console.log(props.animation);
  return (
    <div className="WeatherForecast">
      <div className="days">
        <div className="week Sun">
          <div className="weather-forcast-date">Sun</div>

          <br />
          <WeatherIcon code={props.forecast.animation} size={36} />
          <br />
          <div className="weather-forcast-temperatures">
            <span className="weather-forcast-temperatures-max">
              {Math.round(props.forecast.tempMax)}/
            </span>
            <span className="weather-forcast-temperature-min">
              {Math.round(props.forecast.tempMin)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
