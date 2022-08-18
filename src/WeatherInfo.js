import React from "react";
import FormateDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeaterTemperature";
export default function WetherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>

      <div className="time">
        <div className="newTime">
          <FormateDate date={props.info.date} />
        </div>
      </div>
      <WeatherTemperature tempCelsus={props.info.temp} />

      <div className="text-center">
        <WeatherIcon code={props.info.animation} />
      </div>
      <div className="row">
        <div className="col-4 fs-5">
          Sky
          <div className="rain">
            <span className="text-capitalize ">{props.info.description}</span>
          </div>
        </div>
        <div className="col-4 fs-5">
          Humidity
          <div className="rain">
            <span>{props.info.humidity}</span>%
          </div>
        </div>
        <div className="col-4 fs-5">
          Visibility
          <div className="rain">
            <span>{props.info.visibility}</span>Km/h
          </div>
        </div>
      </div>
    </div>
  );
}
