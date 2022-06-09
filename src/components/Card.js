import React from "react";
import WeatherImage from "./WeatherImage";
import "./card.css";

import moment from "moment";

function Card({ city, degree, condition, date, humidity, feelslike, code }) {

  return (
    <div key={new Date()} className="card animate__animated animate__flipInX">
      <WeatherImage code={code} />

      <div className="card_content">
        <h2>{city}</h2>
        <h2>{`${degree} °C`}</h2>
        <h4>{condition}</h4>
        <h5>{moment(date).format("dddd, MMM YY")}</h5>
        <h6> feelslike: {feelslike}</h6>
        <h6>humidity: {humidity}</h6>
      </div>
    </div>
  );
}

export default Card;
