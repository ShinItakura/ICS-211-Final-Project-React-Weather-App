import React from 'react';

const Weather = (props) => {

    return(
        <div>  
            {props.country && props.city && <p>Location:{props.city},{props.country}</p>}
            {props.temperature && <p>Temperature:{props.temperature}</p>}
            {props.min_temp && <p>Minimum Temperature:{props.min_temp}</p>}
            {props.max_temp && <p>Maximum Temperature:{props.max_temp}</p>}
            {props.humidity && <p>Humidity:{props.humidity}</p>}
            {props.wind && <p>Wind:{props.wind}</p>}
            {props.degrees && <p>Degrees: {props.degrees}</p>}
            {props.description && <p>Conditions:{props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}
export default Weather;