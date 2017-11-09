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
	}

	render() {

		if (this.props.daylist){

			const dayList = 
				this.props.daylist.map(day => (
					<Day 
						date={day.date}
						key={day.date}
						items={day.items}
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