import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Task from './Task';
import AddIcon from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import Star from 'material-ui/svg-icons/action/grade';
import styles from './board.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {
 	red500,
 	amber300,
 	grey300
 } from 'material-ui/styles/colors';

class Bucket extends Component {
	static propTypes = {
		index: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		tasks: PropTypes.array.isRequired,
		addTask: PropTypes.func.isRequired,
		removeTask: PropTypes.func.isRequired,
		shiftTask: PropTypes.func.isRequired,
		updateTask: PropTypes.func.isRequired,
	};

 	titleStyle = {
 		fontSize:"200%",
 		color:red500,
	}

	state = {
		newTask: {
			name: "",
			desc: "",
			star: false
		},
		open: false
	}

	toggleOpen = () => {
	this.setState({open: !this.state.open});
	}

	addTask = e => {
		if (e) e.preventDefault();
		//check for values before submitting
		if (this.state.newTask.name === "" || this.state.newTask.desc === "") 
			{ return this.setState({ newTask: {name: "", desc: "", star: false}, open : false}) }
		//regular submit
		this.props.addTask(this.state.newTask, this.props.index)
		this.setState({ newTask: {name: "", desc: "", star: false}, open : false})
	}

	handleAddTaskName = (e, value) => {
		if (e) e.preventDefault();
		this.setState({
			newTask: {
				...this.state.newTask,
				name: value,
			}
		})
	}
	handleAddTaskDesc = (e, value) => {
		if (e) e.preventDefault();
		this.setState({
			newTask: {
				...this.state.newTask,
				desc: value,
			}
		})
	}
	toggleAddTaskStar = () => {
		this.setState({ 
			newTask: {
				...this.state.newTask,
				star: !this.state.newTask.star
			}
		})
	}

	handleRemoveTask = taskIndex => {
		this.props.removeTask(taskIndex, this.props.index)
	}

	handleShiftTask = (taskIndex, shift) => {
		this.props.shiftTask(taskIndex, this.props.index, shift)
	}

	handleUpdateTask = (taskIndex, task) => {
		this.props.updateTask(taskIndex, this.props.index, task)
	}

	handleEditTask = (taskIndex, task) => {
		this.setState({
			newTask: {
				name: task.name,
				desc: task.desc, 
				star: task.star
			},
			open: true
		})
		this.props.removeTask(taskIndex, this.props.index)
	}

	render() {
		const addActions = [
		      <FlatButton
		      style={{float:"left"}}
		        label="Cancel"
		        primary={true}
		        onClick={this.toggleOpen}
		      />,
		      <FlatButton
		        label="Submit"
		        primary={true}
		        onClick={this.addTask}
		      />,
		    ];

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
					  					handleUpdateTask={this.handleUpdateTask}
					  					handleEditTask={this.handleEditTask}
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
							onClick={this.toggleOpen} 
						/>
						<Dialog
						  title="New Task"
						  actions={addActions}
						  modal={false}
						  open={this.state.open}
						  onRequestClose={this.toggleOpen}
						>{this.state.newTask.star
						?
						<IconButton	
							iconStyle={{color:amber300}}
							onClick={this.toggleAddTaskStar}
						>
							  <Star />
						</IconButton>
						:
						<IconButton	
							iconStyle={{color:grey300}}
							onClick={this.toggleAddTaskStar}
						>
							  <Star />
						</IconButton>
						}
						<TextField
						    hintText="Task Name"
						    onChange={this.handleAddTaskName}
						    value={this.state.newTask.name}
						/>
						<TextField
							floatingLabelText="Description"
							fullWidth={true}
							multiLine={true}
							onChange={this.handleAddTaskDesc}
							value={this.state.newTask.desc}
						/>
						</Dialog>
				</Card>				  				  	
		

		)
	}
}

export default Bucket;