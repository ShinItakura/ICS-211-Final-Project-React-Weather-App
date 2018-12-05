import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather'

const Api_Key = "c7594e25098b8c40b2653c499d0fd254";

class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);

    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "You have not filled in the form, please fill the form"
      })
    }
  }
  render(){
    return(
      <div>
        <Title />
        <Form loadWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} 
        humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
      </div>
    )
  }
}
export default App;
