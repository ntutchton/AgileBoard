import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import {List} from 'material-ui/List';
import Item from './Item';
import {
 	red500, 
 } from 'material-ui/styles/colors';
import styles from './board.scss';


class Day extends Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		date: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired,
		addItem: PropTypes.func.isRequired,
		removeItem: PropTypes.func.isRequired,
		updateItem: PropTypes.func.isRequired,
	};

 titleStyle = {
 		fontSize:"200%",
 		color:"#222",
	}
	state = {
		active: false,
		newItem : {
			name: "",
			status: ""
		}
	}

addItem = e => {
	if (e) e.preventDefault()
	this.props.addItem(this.state.newItem, this.props.index)
	this.setState({
		active: false,
		newItem:{
			name: "",
			status: ""
		}
	})
	
}

handleRemove = index => {
	this.props.removeItem(index, this.props.index)
}

handleUpdate = (index, item) => {
	this.props.updateItem(index, this.props.index, item)
}

handleInput = (e, value) => {
	if (value === ""){
		this.setState({
			active: false,
			newItem:{
				name: ""
			}
		})
	}
	else {
		this.setState({
			active:true,
			newItem:{
				name: value
			}
		})
	}
}

	render() {

			return(
			<Card className={styles.boardList} expanded={true}>
			  <CardHeader
			    title={this.props.date}
			    titleStyle={this.titleStyle}
			    expandable={true}
			  />
			  <CardText expandable={true}>
			  	<List>
			  		{
			  			this.props.items.map((item, index) => (
			  				<Item
			  					index={index}
			  					removeItem={this.handleRemove}
			  					updateItem={this.handleUpdate}	
			  					item={item}
			  					key={item.name}
			  				/>
			  			))
			  		}
			  	</List>
			  </CardText>
			      <TextField
			      	  style={{marginBottom:"20px"}}
				      floatingLabelText="Add Item"
				      onChange={this.handleInput}
				      value={this.state.newItem.name}
				  />
				  {
				  	this.state.active
				  	? 			  		
				  	<RaisedButton 
				  		style={{marginBottom:"20px"}}
				  		icon={<AddIcon color={red500}/>}
				  		onClick={this.addItem}
					/>
					: null
				  }

			</Card>
		)
	}
}

export default Day;