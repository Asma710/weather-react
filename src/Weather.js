import axios from "axios";
import React from "react";
import { Audio } from "react-loader-spinner";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `the temperature in ${response.data.name} is ${response.data.main.temp}`
    );
  }
  let apiKey = "1916e467d6475f3e271325f70b379c90";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
}
