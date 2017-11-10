import * as BucketActionTypes from '../actiontypes/bucket';

export const addTask = (task, index) => {
	return {
		type: BucketActionTypes.ADD_TASK,
		index,
		task
	}
}

export const removeTask = (taskIndex, index) => {
	return {
		type: BucketActionTypes.REMOVE_TASK,
		index,
		taskIndex
	}
}

export const shiftTask = (taskIndex, index, shift) => {
	return {
		type: BucketActionTypes.SHIFT_TASK,
		shift,
		index,
		taskIndex
	}
}

export const updateTask = (taskIndex, index, task) => {
	return {
		type: BucketActionTypes.UPDATE_TASK,
		task,
		index,
		taskIndex
	}
}