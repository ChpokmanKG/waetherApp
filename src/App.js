import React, {Component} from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = 'baf540aa386c255b343c2537569bf31c';


class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    
    
    if(city){
      const API_URL = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      const data = await API_URL.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunsetDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunsetDate,
        error: undefined
      });
    }else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Введите название города'
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
      <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 info"><Info /></div>
          <div className="col-sm-7 form">
          <Form weather={this.getWeather}/>
          <Weather 
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            sunset={this.state.sunset}
            error={this.state.error}
          />
          </div>
        </div>
      </div>
    </div>
        
        
      </div>
    );
  }
}

export default App;
