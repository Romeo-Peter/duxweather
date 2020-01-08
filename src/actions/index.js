import axios from 'axios';

const API_KEY = '4bc073c84db391f44478e9e3f0c66c1c';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},ngr`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		// Payload will be altered redux-promise middleware
		payload: request
	}
}