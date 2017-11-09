import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import styles from './board.scss';
import {
 	red500,
 	fullWhite
 } from 'material-ui/styles/colors';

const centerStyle = {
	height:'100%',
	margin:0,
}

class Task extends Component {
	static propTypes = {
		task: PropTypes.object.isRequired,
	}

	render(){
		return(
			<div>
				<ListItem 
					key={this.props.task.name + ":" + Math.random()}
					primaryText={this.props.task.name}
					secondaryText={this.props.task.desc}
          			secondaryTextLines={2}
          			leftIcon={<LeftIcon color={red500}style={centerStyle} onClick={()=>{console.log('boop')}}/>}
          			rightIcon={<RightIcon color={red500}style={centerStyle} onClick={()=>{console.log('beep')}}/>}
				/> 

			</div>
		)
	}
}

export default Task;