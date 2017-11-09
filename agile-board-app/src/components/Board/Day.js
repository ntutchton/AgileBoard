import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Item from './Item';
import {
 	red500, 
 } from 'material-ui/styles/colors';
import styles from './board.scss';


class Day extends Component {
	static propTypes = {
		date: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired,
	};

 titleStyle = {
 		fontSize:"200%",
 		color:red500,
	}

	render() {

			return(
			<Card className={styles.boardList} expanded={true}>
			  <CardHeader
			    title={this.props.date}
			    titleStyle={this.titleStyle}
			    expandable={true}
			  />
			  <CardText expandable={true}>
			  	<List>
			  		{
			  			this.props.items.map(item => (
			  				<Item	
			  					item={item}
			  					key={item.name}
			  				/>
			  			))
			  		}
			  	</List>
			  </CardText>
			</Card>
		)
	}
}

export default Day;