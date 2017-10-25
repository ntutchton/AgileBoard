import * as BoardActionTypes from '../actiontypes/board';

export const toggleBoard = index => {
	return {
		type: BoardActionTypes.TOGGLE_BOARD,
		index
	};
};