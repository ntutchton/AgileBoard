import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../components/Board';

class BoardList extends Component {

  static propTypes = {
    boards: PropTypes.array.isRequired,
    days: PropTypes.object.isRequired,
    buckets: PropTypes.object.isRequired,
  };

  componentDidMount(){
  	this.props.updateDays();
  }

	render(){

		const OpsBoardComponents = this.props.boards.map((board, index) => {
			if (board.title === "Operations"){
				return(	<Board 
					index={index}
					title={board.title}
					key={board.title}
					toggleBoard={this.props.toggleBoard}
					handleSave={this.props.handleSave}
					active={board.active}
					daylist={this.props.days.daylist}
				/> )
			}
		});

		const DevBoardComponents = this.props.boards.map((board, index) => {
			if (board.title === "Development"){
				return (
					<Board
						index={index}
						title={board.title}
						key={board.title}
						addTask={this.props.addTask}
						toggleBoard={this.props.toggleBoard}
						handleSave={this.props.handleSave}
						removeTask={this.props.removeTask}
						active={board.active}
						bucketList={this.props.buckets.bucketList}
					/>
				)
			}
		})

		return (
			<div className="boardlist">
				{ OpsBoardComponents }
				{ DevBoardComponents }
			</div>
		);
	}
}

export default BoardList;