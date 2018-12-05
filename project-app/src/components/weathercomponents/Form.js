import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="Which City ?" />
            <input type="text" name="country" placeholder="What Country CA, US etc.?" />
            <button>Search</button>
        </form>
    )
}
export default Form;