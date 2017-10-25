import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as BoardActionCreators from '../actions/board';
import Board from '../components/Board';

class BoardList extends Component {

  static propTypes = {
    boards: PropTypes.array.isRequired
  };

	render(){

		const boardComponents = this.props.boards.map((board, index) => {
			<Board 
				index={index}
				title={board.title}
				key={board.title}
				toggleBoard={this.props.toggleBoard}
			/>
		});

		return (
			<div className="boardlist">
				{ boardComponents }
			</div>
		)
	}
}

export default BoardList;