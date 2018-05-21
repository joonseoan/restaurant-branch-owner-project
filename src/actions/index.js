import axios from 'axios';

import { FETCH_FIVE_DAYS_WEATHER } from './fetch_weather';
import { Open_Weather_Key } from './keyValue';

const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Open_Weather_Key}`;

export const weatherInfo = branch_city => { 

	const url = `${ weatherURL }&q=${ branch_city },canada`;

	return async dispatch => {

		const res = await axios.get(url); 

		dispatch({

			type: FETCH_FIVE_DAYS_WEATHER,
			payload: res.data

		});
	
	};

}
	