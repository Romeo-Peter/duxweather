import { FETCH_WEATHER } from '../actions/index';


// Action altered by redux-promise middleware 
// to produce resolved request

const WeatherReducer = (state=[], action) => {
	switch (action.type) {
		case FETCH_WEATHER:
			// Create copy of state array, then mutate.
			return [ action.payload.date, ...state ];

			// This line of works just as the top code
			// Uncomment for for testing
			/* const stateCopy = state.slice();
			 stateCopy.push(action.payload.data); */
	}
	
	return state;
}

export default WeatherReducer;