import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Avatar from 'material-ui/Avatar';
import EditPen from 'material-ui/svg-icons/image/edit';
import Trash from 'material-ui/svg-icons/action/delete-forever';
import Star from 'material-ui/svg-icons/action/grade';
import {
 	red500,
 	red400,
 	fullWhite,
 	amber300,
 	lightBlue200,
 } from 'material-ui/styles/colors';

import IconMenu from 'material-ui/IconMenu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

class Task extends Component {
	static propTypes = {
		task: PropTypes.object.isRequired,
	}

	title = (

		<IconMenu 
		  	style={{textAlign:"center"}}
	        iconButtonElement={
	            <RaisedButton 
	            	label={this.props.task.name}
	            	
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
					onClick={()=>{console.log('deleting: '+this.props.task.name)}}
				/>
	            } />
	            <MenuItem primaryText={
		           <Avatar
					
					icon={<EditPen />} 
					backgroundColor={lightBlue200}
					color={fullWhite}
					size={50}
					onClick={()=>{console.log('editing: '+this.props.task.name)}}
				/>
	            } />
	            <MenuItem primaryText={
	            	<Avatar
					
					icon={<Star />} 
					backgroundColor={amber300}
					color={fullWhite}
					size={50}
					onClick={()=>{console.log('Starring: '+this.props.task.name)}}
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
          			secondaryTextLines={2}
          			leftAvatar={<Avatar 
          							style={{height:"80%"}}
			          				icon={<LeftIcon />} 
			          				color={red500}
			          				backgroundColor={"rgba(0,0,0,0)"}
			          				onClick={()=>{console.log('move left')}}
			          			/>}
          			rightAvatar={<Avatar 
          							style={{height:"80%"}}
			          				icon={<RightIcon />} 
			          				color={red500}
			          				backgroundColor={"rgba(0,0,0,0)"}
			          				onClick={()=>{console.log('move right')}}
			          			/>}
				/> 

			</div>
		)
	}
}

export default Task;