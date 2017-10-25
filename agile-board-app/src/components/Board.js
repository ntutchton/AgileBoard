import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SaveIcon from 'material-ui/svg-icons/content/save';
import NavClose from 'material-ui/svg-icons/navigation/close';
import NavOpen from 'material-ui/svg-icons/navigation/expand-more';

const Board = props => (
	<div>
		<AppBar
			key={props.index}
			title={props.board.title}
			onTitleTouchTap={props.toggleBoard} 
			onLeftIconButtonTouchTap={props.toggleBoard}   
			 
			iconElementRight={<IconButton> <SaveIcon/> </IconButton>}
			iconElementLeft={props.board.active 
				? <IconButton><NavOpen/></IconButton>
				: <IconButton><NavClose/></IconButton>
			}
		/>
	</div>
);

Board.propTypes = {
	index: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	toggleBoard: PropTypes.func.isRequired,
};

export default Board;

// class Board extends Component {
	
//   	toggleBoard = (e, active) => {
// 		console.log(`opening board...${this.state.active}`);
// 		this.setState({active:!this.state.active});
// 	}

// 	handleSave = (e) => {
// 		console.log('saving...')
// 	}
// 	render() {
// 		return (
// 			
// 		);
// 	}
// };
