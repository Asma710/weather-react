import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherIcon(props) {
  console.log(props.code);
  const allIconCode = {
    "01d": "CLEAR DAY",
    "01n": "CLEAR NIGHT",
    "02d": "CLEAR DAY",
    "02n": "CLEAR NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={allIconCode[props.code]}
      color="#8E6173"
      size={75}
      animate={true}
    />
  );
}
