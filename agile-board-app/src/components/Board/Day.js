import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardText, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Day extends Component {
	static propTypes = {
		active: PropTypes.bool.isRequired,
		date: PropTypes.string.isRequired,
};

//need to refator BODY to be a class that prforms condition logic on Days,
//do not need to pass active here, only deal with items

	render() {
		if (this.props.active){
			return(
			<Card expanded={this.props.active}>
			  <CardHeader
			    title={this.props.date}
			    expandable={true}
			  />
			  <CardActions expandable={true}>
			    <FlatButton label="Action1" />
			    <FlatButton label="Action2" />
			  </CardActions>
			  <CardText expandable={true}>
		      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			  </CardText>
			</Card>
		)}
			else return null
	}
}

export default Day;