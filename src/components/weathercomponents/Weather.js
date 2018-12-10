import React from 'react';
import WeatherStyles from './WeatherStyles.css';

const Weather = (props) => {

    return (
        <div className="component-weather-app">
            <form>
                <table className="component-weather-app-table">
                    {props.country && props.city && <tr><td>Location</td><td>{props.city}, {props.country}</td></tr>}
                    {props.temperature && <tr><td>Temperature:</td><td>{props.temperature}</td></tr>}
                    {props.min_temp && <tr><td>Minimum Temperature:</td><td>{props.min_temp}</td></tr>}
                    {props.max_temp && <tr><td>Maximum Temperature:</td><td>{props.max_temp}</td></tr>}
                    {props.humidity && <tr><td>Humidity:</td><td>{props.humidity}</td></tr>}
                    {props.wind && <tr><td>Wind:</td><td>{props.wind}</td></tr>}
                    {props.degrees && <tr><td>Degrees:</td><td>{props.degrees}</td></tr>}
                    {props.description && <tr><td>Conditions:</td><td>{props.description}</td></tr>}
                    {props.error && <tr><td><b>{props.error}</b></td></tr>}
                </table>
            </form>
        </div>
    )
}
export default Weather;