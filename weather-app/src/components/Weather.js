import React from 'react';

const Weather = (props) => {
    return(
        <div id="output">
            {/**weather info inside**/}
            <p>Location: {props.city} {props.country}</p>
            <p>Temperature: {props.temperature}</p>
            <p>Humidity: {props.humidity}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Weather;