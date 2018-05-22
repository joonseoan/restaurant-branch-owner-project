import React from 'react';
import _ from 'lodash';

import ThreeDayTemps from './Three_day_temps';

const ThreeDayAvgTemps = (props) => {

    const dayData = [props.firstDay, props.secondDay, props.thirdDay];
    let dailyAvgTemps = [];

    for  ( let i = 0; i < 3 ; i++) {

        const temp = dayData[i].map( data => data.main.temp);

        dailyAvgTemps[i] = _.round(_.sum(temp)/temp.length - 273) 

    }

    return (    
        
        <tr>

            <td rowSpan = "6">
            
                { props.city }

            </td>

            <td rowSpan = "6">
                
                < ThreeDayTemps threeDayData = { props.threeDayData } />      
            
            </td>
            
            <td>
            
                Avg Temp
            
            </td>
            
            <td>
            
                { dailyAvgTemps[0] }
            
            </td> 
            
            <td>
            
                { dailyAvgTemps[1] }
            
            </td>
            
            <td>
            
                { dailyAvgTemps[2] }
            
            </td>  
        
        </tr>
        
    );

}

export default ThreeDayAvgTemps;