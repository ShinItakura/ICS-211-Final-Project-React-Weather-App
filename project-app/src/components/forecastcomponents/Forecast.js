import React from 'react';

const Forecast = (props) => {
    
    return(
        <div>  
            {props.tomorrow_morning && <p>Tomorrow Mornings Temperature:{props.tomorrow_morning}</p>}
        </div>
    )
}
export default Forecast;