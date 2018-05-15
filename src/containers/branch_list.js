import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select-me';
import 'react-select-me/lib/ReactSelectMe.css';

import { weatherInfo } from '../actions';

const options = [ 
    
    { value: 'Toronto', label: 'Toronto (Main)' },
    { value: 'Vancouver', label: 'Vancouver' },
    { value: 'Ottawa', label: 'Ottawa' }

];


// let startInterval;

let branch_city;

class BranchList extends Component {

    constructor(props) {

        super(props);

        this.state = { 
            
            value: ''
        
        };

        this.onInputChange = this.onInputChange.bind(this); 

        
    }
    
    setTodayWeatherInfo(branch_city) {

        this.setState({ value : branch_city});

        this.props.weatherInfo(branch_city);
        
        /*      
        if(startInterval) clearInterval(startInterval);

        startInterval = setInterval(() => {

            console.log('branch_city',branch_city);

           // this.props.additionalTodayWeatherInfo(branch_city);

        }, 300000);
*/
    }

    
    componentDidMount() {

        // When reloading it is undefined.
        // So We can start from Toronto again
        //      even though localStorage is implemented.
        console.log('compo', branch_city)

        if (!branch_city) {

            branch_city = options[0].value;

            window.localStorage.setItem('branch_city', branch_city);

        }

        branch_city = window.localStorage.branch_city

        this.setTodayWeatherInfo(branch_city);

    }

    onInputChange (value) {
        
        window.localStorage.setItem('branch_city', value.value);

        branch_city = window.localStorage.branch_city;
        
        this.setTodayWeatherInfo(branch_city);

    }

    render() {

        if(!this.state.value)
        return (<div>Loading...</div>);

        return (

            <div>

                <div>
                    
                    <Select

                        options = { options }
                        value = { this.state.value }
                        onChange = { this.onInputChange }
                        
                    />

                </div>

                <div>
                            
                        <h1><center>Welcome to Korean Restaurant in {`${this.state.value}`}</center></h1>

                </div>

            </div>
        
        );

    }

}

export default connect (null, { weatherInfo } )(BranchList);