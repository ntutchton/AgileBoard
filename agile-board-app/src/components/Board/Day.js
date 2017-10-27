import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardText, CardHeader} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import styles from './board.scss';

class Day extends Component {
	static propTypes = {
		date: PropTypes.string.isRequired,
	};

 titleStyle = {
 		fontSize:"200%",
 		color:"red",
	}

	render() {

			return(
			<Card expanded={true}>
			  <CardHeader
			    title={this.props.date}
			    titleStyle={this.titleStyle}
			    expandable={true}
			  />
			  <CardText expandable={true}>
			  	<List>
			  		<ListItem	primaryText="BEEP"/>
			  		<ListItem	primaryText="BOOP"/>
			  		<ListItem	primaryText="BEEP"/>
			  		<ListItem	primaryText="BOOP"/>

			  	</List>
			  </CardText>
			</Card>
		)
	}
}

export default Day;