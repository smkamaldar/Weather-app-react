import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Search from "./components/Search";
import Card from "./components/Card";
import Forcast from "./components/Forcast";


import "animate.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  
  useEffect(() => {
    handleSearch(localStorage.getItem("myCity") ?? 'birmingham')
  }, []);

function handleSearch(search){
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=c9180cda2103416dade100357223005&q=${search}&days=4&aqi=no&alerts=no`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if(data.error?.code !== 1006){
        localStorage.setItem("myCity", search)
        setWeatherData(data);
      }
    });
}


  if(!weatherData) return null
  return (
    <div className="container">
      <Header />
      <div className="hero">
        <Search onSearch={handleSearch} />
        <Card
          city={weatherData.location.name}
          code={weatherData.current.condition.code}
          degree={weatherData.current.temp_c}
          condition={weatherData.current.condition.text}
          date={weatherData.location.localtime}
          humidity={weatherData.current.humidity}
          feelslike={weatherData.current.feelslike_c}
        />
      </div>
      <div className="weekly_forcast">
        {weatherData.forecast.forecastday.map((day,index)=>{
          return <Forcast
           key={`${index}-${new Date()}`}
           code={day.day.condition.code}
           degree={day.day.avgtemp_c}
           date={day.date}
           />
        })}
      
      
      </div>
    </div>
  );
}

export default App;
