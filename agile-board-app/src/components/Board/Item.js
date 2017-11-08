import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
 import {
 	amber300, lightGreen400, red400, lightBlue200,
 } from 'material-ui/styles/colors';

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


const	StatusButtons = props => (
	<div style={{display:'flex', flexDirection: 'row'}}>	
		<FlatButton
			style={{
				backgroundColor: "",
				margin:"10px 0px 10px 0px" 
			}}
			label = "CLEAR"
			onClick = {()=>{ props.setStatus("")}}
		/>
		<FlatButton								
			style={{
				backgroundColor:colors.test.backgroundColor,
				margin:"10px 0px 10px 0px" 
			}}
			label = "TEST"
			onClick = {()=>{ props.setStatus("TEST")}}
		/>
		<FlatButton 
			style={{
				backgroundColor:colors.build.backgroundColor,
				margin:"10px 0px 10px 0px" 
			}}
			label = "BUILD"
			onClick = {()=>{ props.setStatus("BUILD")}}
		/>
		<FlatButton 
			style={{
				backgroundColor:colors.done.backgroundColor,
				margin:"10px 0px 10px 0px" 
			}}
			label = "DONE"
			onClick = {()=>{ props.setStatus("DONE")}}
		/>
		<FlatButton 
			style={{
				backgroundColor:colors.cancel.backgroundColor,
				margin:"10px 0px 10px 0px"
			}}
			label = "CANCEL"
			onClick = {()=>{ props.setStatus("CANCELED")}}
		/>
	</div>
)

StatusButtons.propTypes = {
	setStatus : PropTypes.func.isRequired,
}

class Item extends Component {

	static propTypes = {
		item: PropTypes.object.isRequired,
	}

	state = {
		status: this.props.item.status,
		expanded: false,
		statusColor: {}
	}

	componentDidMount = () => {
		this.setStatus(this.state.status)
	}

	toggleChangeStatus = () => {
		this.setState({
			expanded: !this.state.expanded
		})
	}

	setStatus = newStatus => {
		this.setState({
			status: newStatus,
			expanded: false,
			statusColor: this.setStatusColor(newStatus)
		})
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

	

	render() {		


		return(
			<div>
				<ListItem
					style={this.state.statusColor}
					key={this.props.item.name + ":" + this.props.item.status}
					primaryText={this.props.item.name}
					secondaryText={this.state.status}
					onClick={this.toggleChangeStatus}
				/>
				{(this.state.expanded)
					? (<StatusButtons setStatus={this.setStatus}>{this.props.children}</StatusButtons>)
					: null}
			</div>
		)
	}
}


export default Item;