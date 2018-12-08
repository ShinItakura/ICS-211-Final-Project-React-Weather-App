import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.loadWeather}>
            <p>Find Out What The Weather is Like Somewhere</p>
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
        </form>
    )
}
export default Form;