import React, { useState } from "react";
import { useEffect } from "react";
import "./weatherapi.css";
import imgcld from "./images/img_cld.png";
const Weatherapi = () => {
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("Patna");
  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d57ef43f9ebb9ad8cdf77a1a6c84ef4d`;
      const res = await fetch(url);
      const son = await res.json();

      setcity(son.main);
    };
    fetchapi();
  }, [search]);

  function toCapital() {
    const str = { search };
    a = str.charAt(0).toUpperCase() + str.slice(1);
    // console.log(str2);
  }
  return (
    <div className="weatherapi">
      <div className="first">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <i
          id="hue"
          className="fa-sharp fa-solid fa-trash hue"
          onClick={() => {
            setsearch("");
          }}
        ></i>
      </div>

      {!city ? (
        <p className="notfound">Enter City Name</p>
      ) : (
        <div className="mid">
          <div>
            <h1>
              <i className="fa-solid fa-street-view fa-beat-fade"></i>
              {search}.
            </h1>
          </div>

          <div className="bottom">
            <div className="info">
              <img src={imgcld} alt="" />
              <h1>{city.temp}&#8451; </h1>
            </div>

            <p>
              Min : {city.temp_min} &#8451; | Max : {city.temp_max} &#8451;
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weatherapi;
