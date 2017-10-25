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
			title={props.title}
			onTitleTouchTap={() => props.toggleBoard(props.index)}  
			onLeftIconButtonTouchTap={() => props.toggleBoard(props.index)}   
			onRightIconButtonTouchTap={() => props.handleSave(props.index)}
			iconElementRight={<IconButton> <SaveIcon/> </IconButton>}
			iconElementLeft={props.active 
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