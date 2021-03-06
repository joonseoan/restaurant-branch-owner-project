import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const ThreeDayTemps = (props) => {

    const threeDayTemps = props.threeDayData.map( temperature => temperature.main.temp );

    return (

        <div>

            <Sparklines height= { 320 } width = { 180 }

                data = { threeDayTemps } >

                <SparklinesLine color = "red" />
            
            </Sparklines>

        </div>
    
    );

}

export default ThreeDayTemps;
