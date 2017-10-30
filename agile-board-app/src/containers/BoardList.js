import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../components/Board';

class BoardList extends Component {

  static propTypes = {
    boards: PropTypes.array.isRequired,
    days: PropTypes.object.isRequired,
  };

  componentDidMount(){
  	this.props.updateDays();
  }

	render(){

		const boardComponents = this.props.boards.map((board, index) => (
			<Board 
				index={index}
				title={board.title}
				key={board.title}
				toggleBoard={this.props.toggleBoard}
				handleSave={this.props.handleSave}
				active={board.active}
				daylist={this.props.days.daylist}
			/>
		));

		return (
			<div className="boardlist">
				{ boardComponents }
			</div>
		);
	}
}

export default BoardList;