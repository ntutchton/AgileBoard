import* as DayActionTypes from '../actiontypes/day';

export const updateDays = days => {
	return {
		type: DayActionTypes.UPDATE_DAYS,
		days
	};
};