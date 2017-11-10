import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Avatar from 'material-ui/Avatar';
import EditPen from 'material-ui/svg-icons/image/edit';
import Trash from 'material-ui/svg-icons/action/delete';
import Star from 'material-ui/svg-icons/action/grade';
import {
 	red500,
 	red400,
 	fullWhite,
 	amber300,
 	lightBlue200,
 } from 'material-ui/styles/colors';

import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

class Task extends Component {
	static propTypes = {
		task: PropTypes.object.isRequired,
		index: PropTypes.number.isRequired,
		handleRemoveTask: PropTypes.func.isRequired,
		handleShiftTask: PropTypes.func.isRequired,
		handleUpdateTask: PropTypes.func.isRequired,
		handleEditTask: PropTypes.func.isRequired,
	}

	state = {
		isHighlighted: {}
	}

	componentDidMount= () => {
		this.highlight(this.props.task.star)
	}

	handleRemoveTask = () => {
		this.props.handleRemoveTask(this.props.index)
	}
//sets taskIndex and shift
	handleShiftTaskLeft = () => {
		this.props.handleShiftTask(this.props.index, -1)
	}

	handleShiftTaskRight = () => {
		this.props.handleShiftTask(this.props.index, 1)
	}

	editTask = () => {
		this.props.handleEditTask(this.props.index, this.props.task)
	}

	starTask = () => {
		let newTask = {
			star: !this.props.task.star,
			name: this.props.task.name,
			desc: this.props.task.desc
		}
		this.props.handleUpdateTask(this.props.index, newTask)
		this.highlight(newTask.star)
	}

	highlight = star => {
		if (star === true){
			this.setState({isHighlighted: {backgroundColor: amber300}})
		}
		else this.setState({isHighlighted: {}})
	}

	title = (
		
		<IconMenu 
		  	style={{textAlign:"center"}}
	        iconButtonElement={
	            <FlatButton 
	            	label={this.props.task.name}
	            	labelStyle={{color:'#222', fontSize:'1.4em'}}
	            	primary={true}
	            /> 
	        }
	        anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
	    >
	            <MenuItem primaryText={
		          <Avatar
					icon={<Trash />} 
					backgroundColor={red400}
					color={fullWhite}
					size={50}
					onClick={this.handleRemoveTask}
				/>
	            } />
	            <MenuItem primaryText={
		           <Avatar
					icon={<EditPen />} 
					backgroundColor={lightBlue200}
					color={fullWhite}
					size={50}
					onClick={this.editTask}
				/>
	            } />
	            <MenuItem primaryText={
	            	<Avatar
					icon={<Star />} 
					backgroundColor={amber300}
					color={fullWhite}
					size={50}
					onClick={this.starTask}
				/>		
	            } />
	           
	          </IconMenu>
	)

	render(){
		return(
			<div>
				<ListItem 
					key={this.props.task.name + ":" + Math.random()}
					primaryText={this.title}
					secondaryText={this.props.task.desc}
					innerDivStyle={this.state.isHighlighted}
          			secondaryTextLines={2}
          			leftAvatar={<Avatar 
          							style={{height:"80%"}}
			          				icon={<LeftIcon />} 
			          				color={red500}
			          				backgroundColor={"rgba(0,0,0,0)"}
			          				onClick={this.handleShiftTaskLeft}
			          			/>}
          			rightAvatar={<Avatar 
          							style={{height:"80%"}}
			          				icon={<RightIcon />} 
			          				color={red500}
			          				backgroundColor={"rgba(0,0,0,0)"}
			          				onClick={this.handleShiftTaskRight}
			          			/>}
				/> 

			</div>
		)
	}
}

export default Task;