import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/weather_reducer';

const rootReducer = combineReducers({
	WeatherReducer: WeatherReducer
});

export default rootReducer;