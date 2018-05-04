import React from "react";
import "./App.css";
import Location from "./Location";
import Weather from "./Weather";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textbox: ""
      // city: "",
      // country: "",
      // latitude: "",
      // longitude: "",
      // temperature: "",
      // description: ""
    };
  }

  componentDidMount() {
    this.getWeather("Sydney");
  }

  setCity = event => {
    this.setState({
      textbox: event.target.value
    });
  };

  getWeather = location => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
        process.env.REACT_APP_WEATHER_API_KEY
      }`
    )
      .then(res => res.json())
      .then(body => {
        this.setState({
          city: body.name,
          country: body.sys.country,
          description: body.weather[0].description,
          temperature: Math.floor(body.main.temp - 273.15), // convert kelvin to celsius
          latitude: body.coord.lon,
          longitude: body.coord.lat,
          condition: body.weather[0].main
        });
      });
  };

  handleSubmit = () => {
    this.getWeather(this.state.textbox);
  };

  render() {
    return (
      <div className="weather-app__container">
        <div className="weather-app__searchbar">
          <input
            className="weather-app__textbox"
            placeholder="Search a city"
            value={this.state.textbox}
            onChange={this.setCity}
          />
          <button className="weather-app__button" onClick={this.handleSubmit}>
            Find
          </button>
        </div>
        <Location
          city={this.state.city}
          country={this.state.country}
          lat={this.state.latitude}
          lng={this.state.longitude}
        />
        <Weather
          description={this.state.description}
          temperature={this.state.temperature}
          condition={this.state.condition}
        />
      </div>
    );
  }
}

export default App;
