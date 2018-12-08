import React from 'react';
import Forecast from './forecastcomponents/Forecast';
import ForecastForm from './forecastcomponents/ForecastForm';

const Forecast_Api_Key = "a77c7e467ab1353d0a38cab05a59a43a";


class GetForecast extends React.Component {
    state = {
        temperature0: undefined,
        min_temp0: undefined,
        max_temp0: undefined,
        description0: undefined,
        time0: undefined,
        temperature1: undefined,
        min_temp1: undefined,
        max_temp1: undefined,
        description1: undefined,
        time1: undefined,
        temperature2: undefined,
        min_temp2: undefined,
        max_temp2: undefined,
        description2: undefined,
        time2: undefined,
        temperature3: undefined,
        min_temp3: undefined,
        max_temp3: undefined,
        description3: undefined,
        time3: undefined,
        temperature4: undefined,
        min_temp4: undefined,
        max_temp4: undefined,
        description4: undefined,
        time4: undefined,
        temperature5: undefined,
        min_temp5: undefined,
        max_temp5: undefined,
        description5: undefined,
        time5: undefined,
        error: undefined
    }
    getForecast = async (e) => {
    
        //const city_id = e.target.elements.city_id.value;
        const forecast_city = 'Victoria';
        const forecast_country = 'CA';
        const domain = forecast_city + ',' + forecast_country;
        e.preventDefault();

        //const forecast_api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city_id}&appid=${Forecast_Api_Key}`);
        const forecast_api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${domain}&appid=${Forecast_Api_Key}`);
        const forecast_response = await forecast_api_call.json();
        console.log(forecast_response);
    
        //if(city_id){
        //if(zipcode){
        if(forecast_city && forecast_country){
            this.setState({
                temperature0: forecast_response.list[0].main.temp,
                min_temp0: forecast_response.list[0].main.temp_min,
                max_temp0: forecast_response.list[0].main.temp_max,
                description: forecast_response.list[0].weather[0].description,
                time0: forecast_response.list[0].dt_txt,
                temperature1: forecast_response.list[3].main.temp,
                min_temp1: forecast_response.list[3].main.temp_min,
                max_temp1: forecast_response.list[3].main.temp_max,
                description1: forecast_response.list[3].weather[0].description,
                time1: forecast_response.list[3].dt_txt,
                temperature2: forecast_response.list[11].main.temp,
                min_temp2: forecast_response.list[11].main.temp_min,
                max_temp2: forecast_response.list[11].main.temp_max,
                description2: forecast_response.list[11].weather[0].description,
                time2: forecast_response.list[11].dt_txt,
                temperature3: forecast_response.list[19].main.temp,
                min_temp3: forecast_response.list[19].main.temp_min,
                max_temp3: forecast_response.list[19].main.temp_max,
                description3: forecast_response.list[19].weather[0].description,
                time3: forecast_response.list[19].dt_txt,
                temperature4: forecast_response.list[27].main.temp,
                min_temp4: forecast_response.list[27].main.temp_min,
                max_temp4: forecast_response.list[27].main.temp_max,
                description4: forecast_response.list[27].weather[0].description,
                time4: forecast_response.list[27].dt_txt,
                temperature5: forecast_response.list[35].main.temp,
                min_temp5: forecast_response.list[35].main.temp_min,
                max_temp5: forecast_response.list[35].main.temp_max,
                description5: forecast_response.list[35].weather[0].description,
                time5: forecast_response.list[35].dt_txt,
                error: ""
            })
        }else{
            this.setState({
                error: "Please Choose A Valid Location From The Drop Down Menu"
            })
        }
    }
    render(){
        return(
            <div>
                <ForecastForm loadForecast={this.getForecast}/>
                <Forecast temperature0={this.state.temperature0} 
                min_temp0={this.state.min_temp0} 
                max_temp0={this.state.max_temp0} 
                description0={this.state.description0} 
                time0={this.state.time0} 
                temperature1={this.state.temperature1} 
                min_temp1={this.state.min_temp1} 
                max_temp1={this.state.max_temp1} 
                description1={this.state.description1} 
                time1={this.state.time1}
                temperature2={this.state.temperature2}
                min_temp2={this.state.min_temp2}
                max_temp2={this.state.max_temp2}
                description2={this.state.description2}
                time2={this.state.time2} 
                temperature3={this.state.temperature3} 
                min_temp3={this.state.min_temp3} 
                max_temp3={this.state.max_temp3} 
                description3={this.state.description3} 
                time3={this.state.time3}
                temperature4={this.state.temperature4}
                min_temp4={this.state.min_temp4}
                max_temp4={this.state.max_temp4}
                description4={this.state.description4}
                time4={this.state.time4}
                temperature5={this.state.temperature5} 
                min_temp5={this.state.min_temp5} 
                max_temp5={this.state.max_temp5} 
                description5={this.state.description5} 
                time5={this.state.time5}
                error={this.state.error}
                />
            </div>
        )
    }
}

export default GetForecast;