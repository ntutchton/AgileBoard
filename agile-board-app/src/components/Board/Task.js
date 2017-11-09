import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Avatar from 'material-ui/Avatar';
import EditPen from 'material-ui/svg-icons/image/edit';
import {
 	red500,
 	fullWhite,
 	amber300,
 	lightBlue200
 } from 'material-ui/styles/colors';

class Task extends Component {
	static propTypes = {
		task: PropTypes.object.isRequired,
	}

	title = (
		<div style={{display:"inline-block", wdith:"100%"}}>
			<div style={{display:"inline-block",verticalAlign:"middle",marginRight:"10px"}}>
				{this.props.task.name}
			</div>
			<Avatar
				style={{display:"inline-block",verticalAlign:"middle"}}
				icon={<EditPen />} 
				backgroundColor={lightBlue200}
				color={fullWhite}
				size={20}
				onClick={()=>{console.log('editing: '+this.props.task.name)}}
			/>
		</div>
	)

	render(){
		return(
			<div>
				<ListItem 
					key={this.props.task.name + ":" + Math.random()}
					primaryText={this.title}
					secondaryText={this.props.task.desc}
          			secondaryTextLines={2}
          			hoverColor={amber300}
          			leftAvatar={<Avatar 
			          				icon={<LeftIcon />} 
			          				color={red500}
			          				backgroundColor={fullWhite}
			          				onClick={()=>{console.log('move left')}}
			          			/>}
          			rightAvatar={<Avatar 
			          				icon={<RightIcon />} 
			          				color={red500}
			          				backgroundColor={fullWhite}
			          				onClick={()=>{console.log('move right')}}
			          			/>}
				/> 

			</div>
		)
	}
}

export default Task;