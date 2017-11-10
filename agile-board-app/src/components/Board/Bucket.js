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
		index: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		tasks: PropTypes.array.isRequired,
		addTask: PropTypes.func.isRequired,
		removeTask: PropTypes.func.isRequired,
		shiftTask: PropTypes.func.isRequired,
	};

 	titleStyle = {
 		fontSize:"200%",
 		color:red500,
	}

	state = {
		newTask: { 
			name: "NEW TASK: ",
			desc: "a new task"
		}
	}

	addTask = e => {
		if (e) e.preventDefault()
		this.props.addTask(this.state.newTask, this.props.index)
	}

	handleRemoveTask = taskIndex => {
		this.props.removeTask(taskIndex, this.props.index)
	}

	handleShiftTask = (taskIndex, shift) => {
		this.props.shiftTask(taskIndex, this.props.index, shift)
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
					  			this.props.tasks.map((task, index) => (
					  				<Task
					  					index={index}	
					  					task={task}
					  					key={task.name}
					  					handleRemoveTask={this.handleRemoveTask}
					  					handleShiftTask={this.handleShiftTask}
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
					  		onClick={this.addTask}
						/>
				</Card>				  				  	
		

		)
	}
}

export default Bucket;