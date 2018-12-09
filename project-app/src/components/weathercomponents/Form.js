import React from 'react';
import WeatherStyles from './WeatherStyles.css';

const Form = (props) => {

    return (
        <form className="component-weather-form" onSubmit={props.loadWeather}>
            <p>Find Out What The Weather is Like Somewhere Currently</p>
            <input type="text" name="city" placeholder="Which City ?" />
            <input type="text" name="country" placeholder="What Country CA, US etc.?" />
            {/*<div className="radio">
                <label>
                    <input type="radio" value="metric" checked={true}/>Celcius
                    
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="imperial"/>Fahrenhiet
                </label>
            </div> */}
            <button>Search</button>
            <br/>
            <br/>
        </form>
    )
}
export default Form;