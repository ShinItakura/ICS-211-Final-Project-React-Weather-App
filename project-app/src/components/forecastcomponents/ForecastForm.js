import React from 'react';

const ForecastForm = (props) => {

    return (
        /*
        <form onSubmit={props.loadForecast}>
            <p>Get Your Weather Forecast</p>
            <select>
                <option>Select A Location For Your Forecast</option>
                <option>                                  </option>
                <option>-Canada----------------------------</option>
                <option value="6174041">Victoria, British Columbia, Canada</option>
                <option value="6173331">Vancouver, British Columbia, Canada</option>
                <option value="6167865">Toronto, Ontario, Canada</option>
                <option>-United-States----------------------</option>
                <option value="5128638">New York, New York, United States</option>
                <option value="6072606">Miami, Florida, United States</option>
                <option value="5506956">Las Vegas, Nevada, United States</option>
                <option>-Mexico-----------------------------</option>
                <option value="3531673">Cancun, Quintana Roo, Mexico</option>
                <option value="3530597">Mexico City, District Columbia, MX</option>
                <option value="3521342">Playa Del Carmen, Quintana Roo, MX</option>
                <option>-Asia--------------------------------</option>
                <option value="1880252">Singapore, Singapore</option>
                <option value="1819730">Hong Kong, China</option>
                <option value="1850147">Tokyo, Japan</option>
                <option>-Europe-----------------------------</option>
                <option value="2516479">Ibiza, Spain</option>
                <option value="6269531">Paris, France</option>
                <option value="3202326">Split, Croatia</option>
                <option>-Africa-------------------------------</option>
                <option value="993800">Johannesburg, South Africa</option>
                <option value="4104031">Cairo, Egypt</option>
                <option value="2253350">Dakar, Senegal</option>
            </select>
            <button>Get Forecast</button>
        </form>
        */
        
        //<form onSubmit={props.loadForcast}>
        //    <input type="submit">
        //</form>
        
        /*
        <form onSubmit={props.loadForecast}>
            <input type="text" name="city" placeholder="Which City ?" />
            <input type="text" name="country" placeholder="What Country CA, US etc.?" />
            <button>Search</button>
        </form>
        */
        <form onSubmit={props.loadForecast}>
            <p>Your Five Day Forcast In Victoria BC</p>
            <button value="5_day_forecast">Click here to get your 5 Day Forecast</button>
        </form>
    )
}
export default ForecastForm;