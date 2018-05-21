import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ThreeDayAvgTemps from '../components/Three_day_avg_temps';
import ThreeDayMaxTemps from '../components/Three_day_max_temps';
import ThreeDayMinTemps from '../components/Three_day_min_temps';
import ThreeDayRealTimeWeather from '../components/Three_day_real_time_weather';

class ThreeDayWeather extends Component {

    momentChange(type, days, units, date) {

        return parseInt(moment(date).add(days, units).format(type));

    }

    threeDayData() {
    
        const { list } = this.props.selectedCityWeather;

        if(!list) return <div>Loading...</div>
        
        const year = this.momentChange('YY');
        const month = this.momentChange('MM')
        const today = this.momentChange('DD');
        const thirdDay = this.momentChange('DD', 3, 'days'); 
        
        return list.filter((dayWeather) => {

            const years = this.momentChange('YY', null, null, dayWeather.dt_txt);
            const months = this.momentChange('MM', null, null, dayWeather.dt_txt);
            const fiveDays = this.momentChange('DD', null, null, dayWeather.dt_txt);
 
            if (year === years || year < years) {

                if(month === months || month < months ) {

                    if ( fiveDays !== today && fiveDays <= thirdDay ) {

                        return dayWeather;
            
                    }

                }
            }
            
        });

    }
    
    renderThreeDayWeather () {

        const weatherData = this.threeDayData().reverse();

        const thirdDay = weatherData.filter( data => weatherData.indexOf(data) < 8).reverse();
        
        const secondDay = weatherData.filter( data => weatherData.indexOf(data) >= 8 
            && weatherData.indexOf(data) < 16).reverse();

        const firstDay = weatherData.filter( data => weatherData.indexOf(data) >= 16).reverse();

        return (

          <tbody>
              
                <ThreeDayAvgTemps 

                    firstDay = { firstDay } secondDay = { secondDay } thirdDay = { thirdDay }
                    city = { this.props.selectedCityWeather.city.name }
                    threeDayData = { this.threeDayData() }
                        
                />


                <ThreeDayMaxTemps 

                    firstDay = { firstDay } secondDay = { secondDay } thirdDay = { thirdDay }

                />

                <ThreeDayMinTemps 

                    firstDay = { firstDay } secondDay = { secondDay } thirdDay = { thirdDay }
                />

                <ThreeDayRealTimeWeather 

                    firstDay = { firstDay } secondDay = { secondDay } thirdDay = { thirdDay }
                
                />
            
          </tbody>  
                
        );

    }

    render() {

        if( !this.props.selectedCityWeather )
        return (<div>Loading...</div>);

        return (

            <div>

                <table border="1">
                  
                    <thead>
                        
                        <tr>
                  
                            <th>
                  
                                Branch Location
                  
                            </th>
                  
                            <th>
                  
                                3-Day Temperature
                  
                            </th>
                  
                            <th>
                  
                                Weather Items
                  
                            </th>
                  
                            <th>
                  
                                Tomorrow
                  
                            </th>
                  
                            <th>
                  
                                Day 2
                  
                            </th>
                  
                            <th>
                  
                                Day 3
                  
                            </th>
                  
                        </tr>

                    </thead>
                   
                        { this.renderThreeDayWeather() }
                           
                </table>

            </div>

        );

    }

}

function mapStateToProps ({ selectedCityWeather }) {
    
    return { selectedCityWeather };
    
}

export default connect(mapStateToProps)(ThreeDayWeather);