import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';

class Task extends Component {
	static propTypes = {
		task: PropTypes.object.isRequired,
	}

	render(){
		return(
			<div>
				<ListItem 
					key={this.props.task.name + ":" + Math.random()}
					primaryText={this.props.task.name}
					secondaryText={
			            <p>
			              {this.props.task.desc}
			            </p>
         			}
          			secondaryTextLines={2}
				/> 

			</div>
		)
	}
}

export default Task;