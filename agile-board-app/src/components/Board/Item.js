import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import {
 	amber300, lightGreen400, red400, lightBlue200, fullWhite
 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import Clear from 'material-ui/svg-icons/content/clear';
import TestBug from'material-ui/svg-icons/action/bug-report';
import Build from'material-ui/svg-icons/action/build';
import Done from'material-ui/svg-icons/action/done';
import Cancel from'material-ui/svg-icons/alert/error-outline';
import Trash from 'material-ui/svg-icons/action/delete-forever';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

const colors = {
	test: {
		backgroundColor: amber300,
	},
	build: {
		backgroundColor: lightBlue200,
	},
	done: {
		backgroundColor: lightGreen400,	
	},
	cancel: {
		backgroundColor: red400,
	}
}

class Item extends Component {

	static propTypes = {
		item: PropTypes.object.isRequired,
		index: PropTypes.number.isRequired,
		removeItem: PropTypes.func.isRequired,
	}

	state = {
		name: this.props.item.name,
		status: this.props.item.status,
		statusColor: {}
	}

	componentDidMount = () => {
		this.setStatus(this.state.status)
	}

	setStatus = newStatus => {
		this.setState({
			status: newStatus,
			expanded: false,
			statusColor: this.setStatusColor(newStatus)
		})
		this.props.updateItem(this.props.index, {name:this.state.name, status: newStatus})
	}

	setStatusColor = newStatus => {
		if (newStatus === ""){
			return {}
		}
		if(newStatus === "TEST"){
			return colors.test
		}
		if (newStatus === "BUILD"){
			return colors.build
		}
		if (newStatus === "DONE"){
 			return colors.done

		}
		if (newStatus === "CANCELED"){
			return colors.cancel
		}
	}

	handleRemoveItem =() => {
		this.props.removeItem(this.props.index)
	}

	render() {	

const StatusMenu = (
	  <IconMenu 
	  style={{textAlign:"center"}}
            iconButtonElement={
              <IconButton touch={true}>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText={
	            <Avatar
					icon={<Clear />} 
					color={fullWhite}
					size={50}
					onClick={() => {this.setStatus("")}}
				/>	
            } />
            <MenuItem primaryText={
	            <Avatar
					icon={<TestBug />} 
					color={fullWhite}
					backgroundColor={amber300}
					size={50}
					onClick={() => {this.setStatus("TEST")}}
				/>	
            } />
            <MenuItem primaryText={
            	<Avatar
					icon={<Build />} 
					color={fullWhite}
					backgroundColor={lightBlue200}
					size={50}
					onClick={() => {this.setStatus("BUILD")}}
				/>
            } />
            <MenuItem primaryText={
            	<Avatar
					icon={<Done />} 
					color={fullWhite}
					backgroundColor={lightGreen400}
					size={50}
					onClick={() => {this.setStatus("DONE")}}
				/>
            } />
            <MenuItem primaryText={       		
				<Avatar
					icon={<Cancel />} 
					color={fullWhite}
					backgroundColor={red400}
					size={50}
					onClick={() => {this.setStatus("CANCELED")}}
				/>
            } />
            <MenuItem primaryText={       		
				<Avatar
					icon={<Trash />} 
					color={fullWhite}
					backgroundColor={'#222'}
					size={50}
					onClick={this.handleRemoveItem}
				/>
            } />
          </IconMenu>
)


		return(
			<div>
				<ListItem
					style={this.state.statusColor}
					key={this.props.item.name + ":" + this.props.item.status}
					primaryText={this.props.item.name}
					secondaryText={this.state.status}
					rightIconButton={StatusMenu}
				/>
			</div>
		)
	}
}

export default Item;
