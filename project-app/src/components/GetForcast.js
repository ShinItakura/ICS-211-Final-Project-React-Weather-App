import React from 'react';
import Weather from './forecastcomponents/Forecast';
import ForecastForm from './forecastcomponents/ForecastForm';

const Api_Key = "c7594e25098b8c40b2653c499d0fd254";

class GetForecast extends React.Component {
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
        tomorrow_morning:undefined,
        error: undefined
    }
    getForecast = async (e) => {
    
        const city_id = e.target.elements.city_id.value;

        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forcast?q=${city_id}&appid=${Api_Key}`);
        const response = await api_call.json();
        console.log(response);
    
        if(city_id){
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
                //tomorrow_morning: forcast_response.list[2].main.temp, break into a new module
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
                <ForecastForm loadForecast={this.getForecast}/>
                <Weather temperature={this.state.temperature} min_temp={this.state.min_temp} max_temp={this.state.max_temp} 
                city={this.state.city} country={this.state.country} humidity={this.state.humidity} wind={this.state.wind} 
                degrees= {this.state.degrees} description={this.state.description} error={this.state.error}/>
            </div>
        )
    }
}
export default GetForecast;