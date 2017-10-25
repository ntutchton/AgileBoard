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
			console.log('saving board at index ' + action.index)
			return state;
		default:
			return state;
	}
}