import* as DayActionTypes from '../actiontypes/day';

export const updateDays = days => {
	return {
		type: DayActionTypes.UPDATE_DAYS,
		days
	};
};

export const addItem = (item, index) => {
	return {
		type: DayActionTypes.ADD_ITEM,
		index,
		item
	}
}

export const removeItem = (itemIndex, index) => {
	return {
		type: DayActionTypes.REMOVE_ITEM,
		index,
		itemIndex
	}
}

export const updateItem = (itemIndex, index, item) => {
	return {
		type: DayActionTypes.UPDATE_ITEM,
		item,
		index,
		itemIndex
	}
}