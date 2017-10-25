import * as BoardActionTypes from '../actiontypes/board';

export const toggleBoard = index => {
	return {
		type: BoardActionTypes.TOGGLE_BOARD,
		index
	};
};

export const handleSave = index => {
	return {
		type: BoardActionTypes.HANDLE_SAVE,
		index
	}
}