import React, { Component } from 'react';

export default class ThreeDayRealTimeWeather extends Component {

    constructor (props) {

        super(props);

        this.state = {

            tomorrow : null,
            day2 : null,
            day3 : null

        }  

    }

    componentDidMount() {

        const { firstDay, secondDay, thirdDay } = this.props;
        const dayData = [ firstDay, secondDay, thirdDay ]

        for (let i = 0;  i < dayData.length;  i++ )
        {

            dayData[i] = dayData[i].map( weathers => weathers.weather[0].description);
        
        }

        let firstDayCount = 0;
        let count = 0;

        setInterval(() => {
            
            this.setState({

                tomorrow : dayData[0][firstDayCount],
                day2 : dayData[1][count],
                day3 : dayData[2][count]

            })
           
            firstDayCount++;
            count++;

            
            if(count === dayData[1].length || count === dayData[2].length) 
                count = 0;

            if(firstDayCount === dayData[0].length)
                firstDayCount = 0;

        }, 5000)

    }

    render() {      

        return(
      
            <tr>
                <td>
                    Weather
                </td>
                <td>
                    { this.state.tomorrow } 
                </td>
                
                <td>
                    { this.state.day2 }
                </td>
                
                <td>
                    { this.state.day3 }
                </td>
            </tr>


        );



    }

}

