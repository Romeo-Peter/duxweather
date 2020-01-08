import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/weather_reducer';

const rootReducer = combineReducers({
	Weather: WeatherReducer
});

export default rootReducer;