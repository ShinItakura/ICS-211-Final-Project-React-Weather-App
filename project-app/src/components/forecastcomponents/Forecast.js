import React from 'react';

const Forecast = (props) => {
    
    return(
        
        <div>
            <table>
                <th></th>
                <tr>
                    <td>{props.temperature0 && <p><b>Temperature later:</b><br/>{props.temperature0}</p>}</td>
                    <td>{props.temperature1 && <p><b>Temperature Tomorrow:</b><br/>{props.temperature1}</p>}</td>
                    <td>{props.temperature2 && <p><b>Temperature In 2 Days:</b><br/>{props.temperature2}</p>}</td>
                    <td>{props.temperature3 && <p><b>Temperature In 3 Days:</b><br/>{props.temperature3}</p>}</td>
                    <td>{props.temperature4 && <p><b>Temperature In 4 Days:</b><br/>{props.temperature4}</p>}</td>
                    <td>{props.temperature5 && <p><b>Temperature In 5 Days:</b><br/>{props.temperature5}</p>}</td>
                </tr>
                <tr>
                    <td>{props.min_temp0 && <p><b>Min Temp:</b> {props.min_temp0}</p>}</td>
                    <td>{props.min_temp1 && <p><b>Min Temp:</b> {props.min_temp1}</p>}</td>
                    <td>{props.min_temp2 && <p><b>Min Temp:</b> {props.min_temp2}</p>}</td>
                    <td>{props.min_temp3 && <p><b>Min Temp:</b> {props.min_temp3}</p>}</td>
                    <td>{props.min_temp4 && <p><b>Min Temp:</b> {props.min_temp4}</p>}</td>
                    <td>{props.min_temp5 && <p><b>Min Temp:</b> {props.min_temp5}</p>}</td>
                </tr>
                <tr>
                    <td>{props.max_temp0 && <p><b>Max Temp:</b> {props.max_temp0}</p>}</td>
                    <td>{props.max_temp1 && <p><b>Max Temp:</b> {props.max_temp1}</p>}</td>
                    <td>{props.max_temp2 && <p><b>Max Temp:</b> {props.max_temp2}</p>}</td>
                    <td>{props.max_temp3 && <p><b>Max Temp:</b> {props.max_temp3}</p>}</td>
                    <td>{props.max_temp4 && <p><b>Max Temp:</b> {props.max_temp4}</p>}</td>
                    <td>{props.max_temp5 && <p><b>Max Temp:</b> {props.max_temp5}</p>}</td>
                </tr>
                <tr>
                    <td>{props.time0 && <p><b>Approximate Date Time:</b><br/>{props.time0}</p>}</td>
                    <td>{props.description1 && <p><b>Conditions:</b><br/>{props.description1}</p>} </td>
                    <td>{props.description2 && <p><b>Conditions:</b><br/>{props.description2}</p>} </td>
                    <td>{props.description3 && <p><b>Conditions:</b><br/>{props.description3}</p>} </td>
                    <td>{props.description4 && <p><b>Conditions:</b><br/>{props.description4}</p>} </td>
                    <td>{props.description5 && <p><b>Conditions:</b><br/>{props.description5}</p>} </td>
                </tr>
                {props.error && <p>{props.error}</p>}  
            </table> 
        </div>
    )
}
export default Forecast;