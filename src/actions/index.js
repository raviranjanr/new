import axios from 'axios';

const API_KEY = '22594b79b516e25b55c5f9e824c82d94';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},in`;
	const request = axios.get(url);
	// console.log('request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}