import * as DayActionTypes from '../actiontypes/day';

const initialState = {
	daylist: [
	{
		date: '10/10',
		items: [
			{
				name: "AX001",
				status: "DONE"
			},
			{
				name: "WP12",
				status: "DONE"
			}
		]
	},
	{
				date: '10/11',
		items: [
			{
				name: "AN999",
				status: "DONE"
			},
			{
				name: "AX001a",
				status: "DONE"
			}
		]
	},
	{
				date: '10/12',
		items: [
			{
				name: "VIRGO A",
				status: "TEST"
			},
			{
				name: "WALLY UPDATE",
				status: "DONE"
			}
		]
	},
	{
				date: '10/13',
		items: [
			{
				name: "SPICA C LABELS",
				status: "TEST"
			},

		]
	},
	{
				date: '10/14',
		items: [
			{
				name: "SPARTACUS A",
				status: "TEST"
			},
			{
				name: "SPICA D",
				status: "BUILD"
			},
			{
				name: "AX110",
				status: "TEST"
			},
		]
	},
	{
				date: '10/15',
		items: []
	},
	{
				date: '10/16',
		items: [
			{
				name: "SPARTACUS B LABELS",
				status: ""
			},
		]
	},
	{
				date: '10/17',
		items: [
			{
				name: "XERXES ALPHA",
				status: ""
			},
			{
				name: "WHIPLASH",
				status: ""
			}
		]
	}]
}

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
			const newDayDates = makeDays();
			const newDayList = state.daylist.map((day, index) => {
				return {
					...day,
					date: newDayDates[index].date
				};
			});
			return {
				...state,
				daylist: newDayList
			}
		default: 
			return state;
	}
}