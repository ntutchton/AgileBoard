import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './board.scss';
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
					<div className={styles.body}>
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
					/>
				))

			if(this.props.active){
				return (
					<div className={styles.body}>
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