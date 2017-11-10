import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import Bucket from './Bucket';

class Body extends Component {
	static propTypes = {
		active: PropTypes.bool.isRequired,
  		daylist: PropTypes.array,
  		bucketList: PropTypes.array,
  		addTask: PropTypes.func,
  		addItem:PropTypes.func,
  		removeItem: PropTypes.func,
  		updateItem: PropTypes.func,
  		removeTask: PropTypes.func,
  		shiftTask: PropTypes.func,
  		updateTask: PropTypes.func,
	}

	styles = {
	width: "95%",
	padding: "0 2% 0 2%",
	marginBottom:"25px",
	overflowX:"auto",
	MsBoxOrient: "horizontal",
	display: "flex",
	}

	render() {

		if (this.props.daylist){

			const dayList = 
				this.props.daylist.map((day, index) => (
					<Day 
						date={day.date}
						key={day.date}
						index={index}
						items={day.items}
						addItem={this.props.addItem}
						removeItem={this.props.removeItem}
						updateItem={this.props.updateItem}
					/>
			));
			
			if(this.props.active){
				return (
					<div style={this.styles}>
						{dayList}
					</div>
				)
			}
			else return null
		}
		if (this.props.bucketList){
			const buckets = 
				this.props.bucketList.map((bucket, index) => (
					<Bucket
						index={index}
						title={bucket.title}
						key={bucket.title}
						tasks={bucket.tasks}
						addTask={this.props.addTask}
						removeTask={this.props.removeTask}
						shiftTask={this.props.shiftTask}
						updateTask={this.props.updateTask}
					/>
				))

			if(this.props.active){
				return (
					<div style={this.styles}>
						{buckets}
					</div>
				)
			}
			else return null
		}
		else return null
	}
}
export default Body;