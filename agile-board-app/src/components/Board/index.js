import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import Header from './Header';
import Body from './Body';


class Board extends Component {

	constructor(props) {
		super(props)
		this.state = {
			...this.props,
			message:false
		}
  };
  styles = {
    alignContent: "center",
    textAlign:"center",
  }

  sendMessage = () => {
  	this.setState({
  		message:true,
  	});
  };

  hideMessage = () => {
  	this.setState({
  		message:false,
  	});

  };

	render() {
		return (
			<div style={this.styles}>
				<Header 
					index={this.props.index}
					title={this.props.title}
					toggleBoard={this.props.toggleBoard}
					handleSave={this.props.handleSave} 
					active={this.props.active}
					sendMessage={this.sendMessage}
				/>
				<Body 
					active={this.props.active}
					daylist={this.props.daylist}
					bucketList={this.props.bucketList}
					addTask={this.props.addTask}
					removeTask={this.props.removeTask}
					shiftTask={this.props.shiftTask}
					addItem={this.props.addItem}
					removeItem={this.props.removeItem}
					updateItem={this.props.updateItem}
					updateTask={this.props.updateTask}
				/>

				<Snackbar 
					open={this.state.message}
				    message={`The ${this.props.title} board has been saved`}
				    autoHideDuration={2000}
				    onRequestClose={this.hideMessage}
				    style={{textAlign:"center"}}
				/>
			</div>
	)}
};

Board.propTypes = {
	index: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	toggleBoard: PropTypes.func.isRequired,
	handleSave: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired,
	addItem: PropTypes.func, 
	daylist: PropTypes.array,
	bucketList: PropTypes.array,
	addTask: PropTypes.func,
	removeTask: PropTypes.func,
	removeItem: PropTypes.func,
	updateItem: PropTypes.func,
	shiftTask: PropTypes.func,
	updateTask: PropTypes.func,
};

export default Board;