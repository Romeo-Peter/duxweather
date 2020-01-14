import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/weather_reducer';

const rootReducer = combineReducers({
	weather: WeatherReducer
});

export default rootReducer;