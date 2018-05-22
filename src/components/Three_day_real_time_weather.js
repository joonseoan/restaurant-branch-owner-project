import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';

let startInterval;

export default class ThreeDayRealTimeWeather extends Component {

    constructor (props) {

        super(props);

        this.state = {

            tomorrow : null,
            day2 : null,
            day3 : null,
            time : null,
            tomorrowTemp : null,
            day2Temp : null,
            day3Temp : null

        }  

    }

    setRealTimeWeather(data) {

        let weatherData;

        !data ? weatherData = this.props : weatherData = data;

        const { firstDay, secondDay, thirdDay } = weatherData;

        const times = firstDay.map(time => moment(time.dt_txt).format('hh:mm a'));
        
        const dayWeatherData = [ firstDay, secondDay, thirdDay ];

        const dayTempData = [ firstDay, secondDay, thirdDay ];

        console.log('dayWeatherData', dayWeatherData);

        for (let i = 0;  i < dayWeatherData.length;  i++ )
        {

            dayWeatherData[i] = dayWeatherData[i].map( weathers => weathers.weather[0].description);    
            dayTempData[i] = dayTempData[i].map(temps => _.round(temps.main.temp -273));

        }

        console.log(dayTempData)

        this.setState({

                tomorrow : dayWeatherData[0][0],
                day2 : dayWeatherData[1][0],
                day3 : dayWeatherData[2][0],
                time : times[0],
                tomorrowTemp : dayTempData[0][0],
                day2Temp : dayTempData[1][0],
                day3Temp : dayTempData[2][0]
        
        });

        let count = 1;

        clearInterval(startInterval);

        startInterval = setInterval(() => {
            
            this.setState({

                tomorrow : dayWeatherData[0][count],
                day2 : dayWeatherData[1][count],
                day3 : dayWeatherData[2][count],
                time : times[count],
                tomorrowTemp : dayTempData[0][count],
                day2Temp : dayTempData[1][count],
                day3Temp : dayTempData[2][count]

            });
           
            count++;
            
            if(count === dayWeatherData[0].length || count === dayWeatherData[1].length || count === dayWeatherData[2].length) 
                count = 0;

        }, 5000)

    }

    componentDidMount() {

        this.setRealTimeWeather();

    }

    componentWillReceiveProps(nextProps) {

        console.log(nextProps);

        this.setRealTimeWeather(nextProps);

    }


    // IMPORTANT!!! ****************
    // componentWillUpdate(nextProps) {

    //     //console.log(nextProps);

    //   this.setRealTimeWeather(nextProps);

    // }

    render() {  

        return[

            <tr key = '1'>

                <td>
                    
                    Real Time

                </td>
            
                <td colSpan = '3'>
                
                  <span> <center> <strong> { this.state.time } </strong> </center></span>
                
                </td>
            
            </tr>,
            
            <tr key = '2'>
            
                <td>
                
                  Temperature

                </td>

                <td>
            
                    { this.state.tomorrowTemp } 
            
                </td>
                
                <td>
            
                    { this.state.day2Temp }
            
                </td>
                
                <td>
            
                    { this.state.day3Temp }
            
                </td>
            
            </tr>,
            
            <tr key = '3'>
            
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

        ];
        
    }

}

