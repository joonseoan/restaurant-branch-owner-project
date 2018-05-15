import axios from 'axios';

import { FETCH_FIVE_DAYS_WEATHER } from './fetch_weather';
import { Open_Weather_Key } from './keyValue';

const FiveDaysURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Open_Weather_Key}`;

export function weatherInfo(branch_city) {

    const URL = `${ FiveDaysURL }&q=${ branch_city },canada`;

    const request = axios.get(URL);

    console.log('request: ', request);

    return ({

        type: FETCH_FIVE_DAYS_WEATHER,
        payload: request 

    });

}