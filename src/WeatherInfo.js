import React from "react";
import FormateDate from "./FormateDate";
export default function WetherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>

      <div className="time">
        <div className="newTime">
          <FormateDate date={props.info.date} />
        </div>
        <div className="hour"></div>
      </div>

      <div>
        <strong className="temperature">{props.info.temp}</strong>
        <span className="unitesTemp">
          <a href="/" className="active">
            °C
          </a>{" "}
          |<a href="/">°F</a>
        </span>
      </div>
      <img src={props.info.animation} alt="sunny" className="float-left" />
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