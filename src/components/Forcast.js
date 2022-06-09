import React from 'react'
import WeatherImage from './WeatherImage';
import "./forcast.css";
import moment from 'moment';

function Forcast({code, date, degree,}) {
  return (
    <div className='forcast_card animate__animated animate__fadeInLeft'>
        <WeatherImage code={code}/>
        <div className='forcast_details'>
        <h4>{moment(date).format("dddd")}</h4>
        <h5>{`${degree} °C`}</h5>
        <h6>{moment(date).format("DD/MM/YYYY")}</h6>
        </div>
       
    </div>
  )
}

export default Forcast