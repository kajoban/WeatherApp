import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type='text' name='city' placeholder='Enter City...'/>
            <input type='text' name='country' placeholder='Enter Country...'/>
            <button>Get Weather</button>
        </form>
    )
}

export default Form 