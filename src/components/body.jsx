import React from "react";
import Search_icn from "../images/search.png";
import Clear_icn from "../images/A.png";
import Cloud_icn from "../images/cloud.png";
import drizzle_icn from "../images/A.png";
import rain_icn from "../images/A.png";
import snow_icn from "../images/A.png";
import wind_icn from "../images/wind.png";
import humidity_icn from "../images/humidity.png";

const BodySec = () =>{

    let apiKey = "fb33fe27a32fb21a13f0cb2ace9be3c0";
    const search = async () => {
      const element = document.getElementsByClassName("search_inpt");
      if (element[0].value === "") {
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

      let response = await fetch(url);
      let data = await response.json();

      let humidityData = document.getElementById("humiditypercntData");
      let windData = document.getElementById("windSpeedData");
      let temprature = document.getElementById("weatherTempData");
      let location = document.getElementById("locationData");

      humidityData.innerHTML = data.main.humidity;
      windData.innerHTML = data.wind.speed;
      temprature.innerHTML = data.main.temp;
      location.innerHTML = data.name;
    };


    return (
      <div className="body_wrap">
        <div className="container">
          <div className="body_cont">
            <form className="search_wrap">
              <input type="text" className="search_inpt" placeholder="Search"></input>
              <button type="button" className="search_btn" onClick={()=>{search()}}>
                <img src={Search_icn}></img>{" "}
              </button>
            </form>
            <div className="weather_data">
              <div className="weather_img">
                <img src={Cloud_icn}></img>
              </div>
              <div className="weather_temp" id="weatherTempData">30°c</div>
              <div className="weather_location" id="locationData">Kolkata</div>
              <div className="data_container">
                <div className="element">
                  <img src={humidity_icn} alt="" className="icon"></img>
                  <div className="data">
                    <div className="humidity_percent" id="humiditypercntData">64%</div>
                    <div className="text">Humidity</div>
                  </div>
                </div>
                <div className="element">
                  <img src={wind_icn} alt="" className="icon"></img>
                  <div className="data">
                    <div className="humidity_percent" id="windSpeedData">9 KM/H</div>
                    <div className="text">Wind Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BodySec;