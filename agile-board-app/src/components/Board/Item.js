import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

class Item extends Component {

	static propTypes = {
		item: PropTypes.object.isRequired,
	}

	state={
		status: this.props.item.status,
		color: this.getColor(this.props.item.status)
	}

	getColor(status){
		if (status === "DONE"){
			return {backgroundColor: "#CCFF90" }
		}
		if (status === "TEST"){
			return {backgroundColor: "#FFAB40"}
		}
		return null
	}

	isChecked() {
		if (this.state.status === "DONE"){
			return (<Checkbox checked={true}/>)
		} else return (<Checkbox />)
	}
	render() {
		return(
			<ListItem
			key={this.props.item}
			primaryText={this.props.item.name}
			style={this.itemStyle}
			secondaryText={this.props.item.status}
			innerDivStyle={this.getColor(this.props.item.status)}
		/>
		)
	}
}


export default Item;