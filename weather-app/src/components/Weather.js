import React from 'react';

const Weather = (props) => {
    return(
        <div>
            {/**weather info inside**/}
            <p>Location:{props.city} {props.country}</p>
            <p>Temperature (deg C): {props.temperature}</p>
            <p>Humidity (%): {props.humidity}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Weather;