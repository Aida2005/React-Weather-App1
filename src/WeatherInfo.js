import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">
              Description:{props.data.description}
            </li>
        </ul>
        <div className="row mt-5">
            <div className="col-6">
                <div className="clearfix">
                     <div  className="float-left">
                <img 
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
                
                />
               
               <span className="temprature">{Math.round(props.data.temprature)}</span>
               <span className="unit">°c</span>
               </div>
</div>
            </div>
            <div className="col-6">
                <ul>
                   <li> Precipitation: 0%</li>
                  <li>Humadity:{props.data.humidity} %</li>
                   <li>Wind:{props.data.wind}km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
    
}