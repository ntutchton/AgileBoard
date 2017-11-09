import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Task from './Task';
import AddIcon from 'material-ui/svg-icons/content/add';
import styles from './board.scss';
import RaisedButton from 'material-ui/RaisedButton';
import {
 	red500,
 } from 'material-ui/styles/colors';

class Bucket extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		tasks: PropTypes.array.isRequired,
	};

 titleStyle = {
 		fontSize:"200%",
 		color:red500,
	}

	render() {

			return(
			
				<Card className={styles.boardList} expanded={true}>
				  <CardHeader
				    title={this.props.title}
				    titleStyle={this.titleStyle}
				    expandable={true}
				  />
				    <CardText expandable={true}>
					  	<List>
					  		{
					  			this.props.tasks.map(task => (
					  				<Task	
					  					task={task}
					  					key={task.name}
					  				/>
					  			))
					  		}
					  	</List>					


				    </CardText>
					  	<RaisedButton 
					  	className={styles.addbutton}
					  	label="ADD TASK"
				  		icon={<AddIcon color={red500}/>}
				  		fullWidth={true}
				  		secondary={true} 
						/>
				</Card>				  				  	
		

		)
	}
}

export default Bucket;