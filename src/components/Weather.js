import React from "react";

export default function Weather(props) {
  return (
    <div className="weather">
      {props.temperature && (
        <p>
          temperature : <span>{props.temperature}</span>
        </p>
      )}
      {props.city && (
        <p>
          city : <span>{props.city} </span>
        </p>
      )}

      {props.country && (
        <p>
          country : <span>{props.country} </span>
        </p>
      )}
      {props.humidity && (
        <p>
          humidity : <span>{props.humidity} </span>
        </p>
      )}
      {props.description && (
        <p>
          description : <span>{props.description} </span>
        </p>
      )}
      {props.error && (
        <p>
          error : <span>{props.error} </span>
        </p>
      )}
    </div>
  );
}
