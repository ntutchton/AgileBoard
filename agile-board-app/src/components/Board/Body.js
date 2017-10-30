import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './board.scss';
import Day from './Day';

class Body extends Component {
	static propTypes = {
		active: PropTypes.bool.isRequired,
  		daylist: PropTypes.array.isRequired,
	}

		render() {

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
}

export default Body;