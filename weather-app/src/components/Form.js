import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <div className='group'>
                <input type='text' name='city' placeholder='Enter City...' /> <br></br>
                <input type='text' name='country' placeholder='Enter Country...' /> <br></br>
                <button className="btn btn-outline-primary">Get Weather</button>
            </div>
        </form>
    )
}

export default Form 