import * as DayActionTypes from '../actiontypes/day';

const initialState = makeDays();

//returns a new array of date strings
function makeDays(){
	//returns date string given a time
	function makeDate(time) {
		let date = new Date(time);
		return `${date.getMonth()+1}/${date.getDate()}`;	
	}

	let d = new Date();
	let day = 86400000;
	return [
		{
			date: makeDate(d.getTime() - (day*2)),
		},
		{
			date: makeDate(d.getTime() - day),
		},
		{
			date: makeDate(d.getTime()),
		},
		{
			date: makeDate(d.getTime() + (day)),
		},
		{
			date: makeDate(d.getTime() + (day*2)),
		},
		{
			date: makeDate(d.getTime() + (day*3)),
		},
		{
			date: makeDate(d.getTime() + (day*4)),
		},
		{
			date: makeDate(d.getTime() + (day*5)),
		}
	]
}

export default function Day(state=initialState, action) {
	switch(action.type){
		case DayActionTypes.UPDATE_DAYS:
			const newDayList = makeDays();
			return {
				...state,
				newDayList
			}
		default: 
			return state;
	}
}