import React from 'react';
import Weather from './weathercomponents/Weather';
import Form from './weathercomponents/Form';

const Api_Key = "c7594e25098b8c40b2653c499d0fd254";

class GetWeather extends React.Component {
    state = {
        temperature: undefined,
        min_temp: undefined,
        max_temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        degrees: undefined,
        description: undefined,
        error: undefined
    }
    
    getWeather = async (e) => {
    
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const celcius = "metric";
        //const scale = e.target.elements.scale.value;
        e.preventDefault();
        //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=${scale}`);
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${celcius}&appid=${Api_Key}`);
        const response = await api_call.json();
        console.log(response);
    
        if(city && country){
            this.setState({
                temperature: response.main.temp,
                min_temp: response.main.temp_min,
                max_temp: response.main.temp_max,
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                wind: response.wind.speed,
                degrees: response.wind.deg,
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
                <Form loadWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature} min_temp={this.state.min_temp} max_temp={this.state.max_temp} 
                city={this.state.city} country={this.state.country} humidity={this.state.humidity} wind={this.state.wind} 
                degrees= {this.state.degrees} description={this.state.description} error={this.state.error}/>
            </div>
        )
    }
}
export default GetWeather;