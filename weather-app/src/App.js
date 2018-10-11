import React from 'react';
import Titles from './components/Titles.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'

const APIkey = 'e01cd897eab95c745e30b14b61f4e365';

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault(); //prevent default page load
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`);
    const response = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: Math.trunc(response.main.temp - 273.15) + " °C",
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity + "%",
        description: response.weather[0].description,
      })
    } else {
      this.setState({
        temperature: undefined, 
        city: undefined, 
        country: undefined, 
        humidity: undefined, 
        description: 'Please enter the location...', 
      })
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App; 