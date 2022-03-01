import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, SetWeatherData]= useState({});
    function handleResponse(response){
        console.log(response.data);
        SetWeatherData({
        temprature:response.data.main.temp,
        humadity:response.data.main.humadity,
        data:"Wednesday 07:00",
        description:response.data.Weather[0].description,
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        wind:response.data.wind.speed,
        city: response.data.name
      });
        setReady(true);
    }

    if (ready){
         return (
    <div className="Weather">
          <form >
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
            <li> {weatherData}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-5">
            <div className="col-6">
                <div className="clearfix">
                     <div  className="float-left">
                <img 
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
                
                />
               
               <span className="temprature">{Math.round(weatherData.temprature)}</span>
               <span className="unit">°c</span>
               </div>
</div>
            </div>
            <div className="col-6">
                <ul>
                   <li> Precipitation: 0%</li>
                  <li>Humadity;{weatherData.humadity} %</li>
                   <li>Wind:{weatherData.wind}km/h</li>
                </ul>
            </div>
        </div>
       </div>
    );
    } else{
           const apiKey="2a805289886a6cb0a6fa9785663fff97";
    let city="New York"
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
}
}
    
