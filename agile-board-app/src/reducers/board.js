import * as BoardActionTypes from '../actiontypes/board';

const initialState = [
	{
		title:"Operations",
		active:true,
	},
	{
		title:"Development",
		active:true,
	}
]

export default function Board(state=initialState, action){
	switch(action.type){
		case BoardActionTypes.TOGGLE_BOARD:
			return state.map((board, index) => {
				if (index === action.index){
					return {
						...board,
						active: !board.active
					}
				}
				return board;
			})
		case BoardActionTypes.HANDLE_SAVE:
			return state.map((board, index) => {
				if (index === action.index){
					console.log('saving board at index ' + index)
				}
				return board;
			})
		default:
			return state;
	}
}