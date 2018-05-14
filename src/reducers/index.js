import { combineReducers } from 'redux';

import selectedCityWeather  from './selected_city_weather';
import branchLocation from './branch_location';
import additionalTodayWeather from './additional_today_weather';

const reducers = combineReducers({
    
    selectedCityWeather,
    branchLocation,
    additionalTodayWeather

});

export default reducers;