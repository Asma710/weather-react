import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unite, setUnite] = useState("celecius");
  console.log(props);
  function convortFaranhait(event) {
    event.preventDefault();
    setUnite("fahranhaite");
  }
  function convortCelecius(event) {
    event.preventDefault();
    setUnite("celecius");
  }
  if (unite === "celecius") {
    return (
      <div>
        <strong className="temperature">{props.tempCelsus}</strong>
        <span className="unitesTemp">
          <span>°C</span> |
          <a href="/" onClick={convortFaranhait}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahranhait = Math.round((props.tempCelsus * 9) / 5 + 32);
    return (
      <div>
        <strong className="temperature">{fahranhait}</strong>
        <span className="unitesTemp">
          <a href="/" className="active" onClick={convortCelecius}>
            °C
          </a>{" "}
          |<span>°F</span>
        </span>
      </div>
    );
  }
}
