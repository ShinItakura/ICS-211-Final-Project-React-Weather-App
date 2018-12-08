import React from 'react';

const Forecast = (props) => {
    
    return(
        
        <div>
            <table>
                <th></th>
                <tr>
                    <td>{props.temperature0 && <p>Temperature Tonight:      {props.temperature0}</p>}</td>
                    <td>{props.temperature1 && <p>Temperature Tomorrow:     {props.temperature1}</p>}</td>
                    <td>{props.temperature2 && <p>Temperature In Two Days:  {props.temperature2}</p>}</td>
                    <td>{props.temperature3 && <p>Temperature In Three Days:{props.temperature3}</p>}</td>
                    <td>{props.temperature4 && <p>Temperature In Four Days: {props.temperature4}</p>}</td>
                    <td>{props.temperature5 && <p>Temperature In Five Days: {props.temperature5}</p>}</td>
                </tr>
                <tr>
                    <td>{props.min_temp0 && <p>Minimum Temperature: {props.min_temp0}</p>}</td>
                    <td>{props.min_temp1 && <p>Minimum Temperature: {props.min_temp1}</p>}</td>
                    <td>{props.min_temp2 && <p>Minimum Temperature: {props.min_temp2}</p>}</td>
                    <td>{props.min_temp3 && <p>Minimum Temperature: {props.min_temp3}</p>}</td>
                    <td>{props.min_temp4 && <p>Minimum Temperature: {props.min_temp4}</p>}</td>
                    <td>{props.min_temp5 && <p>Minimum Temperature: {props.min_temp5}</p>}</td>
                </tr>
                <tr>
                    <td>{props.max_temp0 && <p>Maximum Temperature: {props.max_temp0}</p>}</td>
                    <td>{props.max_temp1 && <p>Maximum Temperature: {props.max_temp1}</p>}</td>
                    <td>{props.max_temp2 && <p>Maximum Temperature: {props.max_temp2}</p>}</td>
                    <td>{props.max_temp3 && <p>Maximum Temperature: {props.max_temp3}</p>}</td>
                    <td>{props.max_temp4 && <p>Maximum Temperature: {props.max_temp4}</p>}</td>
                    <td>{props.max_temp5 && <p>Maximum Temperature: {props.max_temp5}</p>}</td>
                </tr>
                <tr>
                    <td>{props.description0 && <p>Conditions:   {props.description0}</p>} </td>
                    <td>{props.description1 && <p>Conditions:   {props.description1}</p>} </td>
                    <td>{props.description2 && <p>Conditions:   {props.description2}</p>} </td>
                    <td>{props.description3 && <p>Conditions:   {props.description3}</p>} </td>
                    <td>{props.description4 && <p>Conditions:   {props.description4}</p>} </td>
                    <td>{props.description5 && <p>Conditions:   {props.description5}</p>} </td>
                </tr>
                <tr>
                    <td>{props.time0 && <p>DateTime:    {props.time0}</p>}</td>
                    <td>{props.time1 && <p>DateTime:    {props.time1}</p>}</td>
                    <td>{props.time2 && <p>DateTime:    {props.time2}</p>}</td>
                    <td>{props.time3 && <p>DateTime:    {props.time3}</p>}</td>
                    <td>{props.time4 && <p>DateTime:    {props.time4}</p>}</td>
                    <td>{props.time5 && <p>DateTime:    {props.time5}</p>}</td>
                </tr>
                {props.error && <p>{props.error}</p>}  
            </table> 
        </div>
    )
}
export default Forecast;