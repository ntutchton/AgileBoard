import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SaveIcon from 'material-ui/svg-icons/content/save';
import NavClose from 'material-ui/svg-icons/navigation/close';
import NavOpen from 'material-ui/svg-icons/navigation/expand-more';



class HeaderBar extends Component {

	state = {
		active:true,
		boards:[{title:"Operations"}, {title:"Development"}]
	}
	
  handleToggle = (e, active) => {
		console.log(`opening board...${this.state.active}`);
		this.setState({active:!this.state.active});
	}

	handleSave = (e) => {
		console.log('saving...')
	}
	render() {
		return (
			<div>
			{this.state.boards
				.map( (board, index) => {
					return(
						<AppBar
							key={index}
							title={board.title}
							onTitleTouchTap={this.handleToggle} 
							onLeftIconButtonTouchTap={this.handleToggle}   
							onRightIconButtonTouchTap={this.handleSave}  
							iconElementRight={<IconButton> <SaveIcon/> </IconButton>}
							iconElementLeft={this.state.active 
								? <IconButton><NavOpen/></IconButton>
								: <IconButton><NavClose/></IconButton>
							}
						/>
					);
				})
				}	
			}	
			</div>
		);
	}
};


export default HeaderBar;