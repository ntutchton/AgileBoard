import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import Header from './Header';


class Board extends Component {

	constructor(props) {
		super(props)
		this.state = {
			...this.props,
			message:false
		}
  };

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
			<div>
				<Header 
					index={this.props.index}
					title={this.props.title}
					toggleBoard={this.props.toggleBoard}
					handleSave={this.props.handleSave} 
					active={this.props.active}
					sendMessage={this.sendMessage}
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
};

export default Board;