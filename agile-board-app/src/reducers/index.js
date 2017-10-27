import boards from './board';
import days from './day';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
	boards,
	days,
});
export default rootReducer;