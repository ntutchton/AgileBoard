import * as BucketActionTypes from '../actiontypes/bucket';

export const addTask = (index, task) => {
	return {
		type: BucketActionTypes.ADD_TASK,
		index,
		task
	}
}

export const removeTask = index => {
	return {
		type: BucketActionTypes.REMOVE_TASK,
		index
	}
}