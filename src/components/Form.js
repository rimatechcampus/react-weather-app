import React from "react";
import "../App.css";
export default function Form(props) {
  return (
    <div>
      <form onSubmit={props.getWeather} className="myform">
        <input
          type="text"
          name="city"
          className="city"
          placeholder="enter city"
        />
        <input
          type="text"
          name="country"
          className="country"
          placeholder="enter the city"
        />
        <button className="btn">check the weather</button>
      </form>
    </div>
  );
}
