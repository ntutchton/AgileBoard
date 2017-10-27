import React from 'react';
import PropTypes from 'prop-types';
import styles from './board.scss';
import Day from './Day';

const Body = props => (
	<div className={styles.body}>
	{
		props.days.map(day => (
			<Day 
				active={props.active}
				date={day.date}
				key={day.date}
			/>
		))
	}
	</div>

)

Body.propTypes = {
	active: PropTypes.bool.isRequired,
	days: PropTypes.array.isRequired,
};

export default Body;