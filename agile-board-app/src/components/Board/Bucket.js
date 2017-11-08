import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Item from './Item';
import styles from './board.scss';
import RaisedButton from 'material-ui/RaisedButton';

class Bucket extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		tasks: PropTypes.array.isRequired,
	};


	render() {

			return(
			
				<Card className={styles.bucket} expanded={true}>
				  <CardHeader
				    title={this.props.title}
				    expandable={true}
				  />
				    <CardText expandable={true}>
					  	<List>
					  		{
					  			this.props.tasks.map(task => (
					  				<Item	
					  					item={task}
					  					key={task.name}
					  				/>
					  			))
					  		}
					  	</List>					


				    </CardText>
					  	<RaisedButton 
					  	className={styles.addbutton}
				  		label="ADD TASK"
				  		secondary={true} 
						/>
				</Card>				  				  	
		

		)
	}
}

export default Bucket;