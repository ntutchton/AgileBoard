import boards from './board';
import days from './day';
import buckets from './bucket';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
	boards,
	days,
	buckets,
});
export default rootReducer;