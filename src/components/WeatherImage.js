import React from "react";
// import cloudWind from "../assets/images/Cloud-wind.svg";
import cloud from "../assets/images/Clouds.svg";
import drizzle from "../assets/images/Drizzle.svg";
import rain from "../assets/images/Rain.svg";
import sunny from "../assets/images/Sunny.svg";

const WeatherImage = ({code}) =>{
    switch (code) {
        case 1009:
        case 1003:
            return <img alt="cloud" src={cloud}/>
        // case 1009:
        //     return <img alt="cloudWind" src={cloudWind}/>
        case 1240:
            return <img alt="drizzle" src={drizzle}/>
        case 1063:
        case 1189:
        case 1246:
            return <img alt="rain" src={rain}/>
        case 1000:
            return <img alt="sunny" src={sunny}/>
        default:
           return null;
    }
   
}

export default WeatherImage;