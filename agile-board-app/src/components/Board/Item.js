import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import LeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const colors = {
	test: {
		backgroundColor: "tomato",
	},
	build: {
		backgroundColor: "blue",
	},
	done: {
		backgroundColor: "green",	
	}
}

const	StatusButtons = props => (
						<div>	
							<FlatButton 

								label = "NONE"
								onClick = {()=>{ props.setStatus("")}}
							/>
							<FlatButton								
								style={colors.test} 
								label = "TEST"
								onClick = {()=>{ props.setStatus("TEST")}}
							/>
							<FlatButton 
								style={colors.build} 
								label = "BUILD"
								onClick = {()=>{ props.setStatus("BUILD")}}
							/>
							<FlatButton 
								style={colors.done} 
								label = "DONE"
								onClick = {()=>{ props.setStatus("DONE")}}
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
		expanded: false
	}

	toggleChangeStatus = () => {
		this.setState({
			expanded: !this.state.expanded
		})
	}

	setStatus = newStatus => {
		this.setState({
			status: newStatus,
			expanded: false
		})
	}

	

	render() {		


		return(
			<div>
			<ListItem
				key={this.props.item}
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