import React, { Component } from 'react';

import ThreeDayWeather from '../containers/three_day_weather';
import BranchList from '../containers/branch_list';


class App extends Component {

    render () {

        return (
        
            <div>
                
                <div>
                    <BranchList />
                </div> 
                
                <div>
                    <ThreeDayWeather /> 
                </div>

                <p>daily revenu, monthly revenue, yearly revenue</p>
                <p> order delivery to kitchen </p>
                <p> revenue in terms of average temp, however, wheather item must be same</p>
                <p> past revenu history for instance, last week, month, last year</p>
                <p> preparation in terms of weather.</p>
            
            </div>


        );

    }

}

export default App;