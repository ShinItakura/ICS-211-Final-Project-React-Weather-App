import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="Which City ?" />
            <input type="text" name="country" placeholder="What Country ?" />
            <button>Search</button>
        </form>
    )
}
export default Form;