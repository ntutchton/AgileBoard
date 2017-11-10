import React, { Component } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';

///
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BoardActionCreators from '../../actions/board';
import * as DayActionCreators from '../../actions/day';
import * as BucketActionCreators from '../../actions/bucket';

import BoardList from '../BoardList';

import logo from '../../Dish_Network_logo_2012.svg';

class App extends Component {

 static propTypes = {
    reducers: PropTypes.object.isRequired
  };

  styles = {
    app:{
      background: "#222",
      margin: "0",
      padding: "0",
      fontFamily: "sans-serif",
    },
    logo: {
      height: '80px',
    },
    header: {
      textAlign:'center',
      backgroundColor: '#222',
      height: '150px',
      padding: '20px',
      color: 'white',
      }, 
    title: {
      fontSize: '1.5em',
    },
    intro: {
      textAlign:'center',
      fontSize: 'large',
      color:'white',
    }
  }

  render() {

    const { dispatch, reducers } = this.props;
    //board
    const toggleBoard = bindActionCreators(BoardActionCreators.toggleBoard, dispatch);
    const handleSave = bindActionCreators(BoardActionCreators.handleSave, dispatch);
    //days
    const updateDays = bindActionCreators(DayActionCreators.updateDays, dispatch);
    const addItem = bindActionCreators(DayActionCreators.addItem, dispatch);
    const removeItem = bindActionCreators(DayActionCreators.removeItem, dispatch);
    const updateItem = bindActionCreators(DayActionCreators.updateItem, dispatch);
    //buckets
    const addTask = bindActionCreators(BucketActionCreators.addTask, dispatch);
    const removeTask = bindActionCreators(BucketActionCreators.removeTask, dispatch);
    const shiftTask = bindActionCreators(BucketActionCreators.shiftTask, dispatch);
    const updateTask = bindActionCreators(BucketActionCreators.updateTask, dispatch);

    return (
      <BrowserRouter>
          
          <div style={this.styles.app}>
            <header style={this.styles.header}>
              <img src={logo} style={this.styles.logo} alt="logo" />
              <h1 style={this.styles.title}>AgileBoard <small>v0.0.1</small> </h1>
            </header>
            <p style={this.styles.intro}>
              This is an exploratory project in incorporating IoT on the SCM/DCM team. <br/>
              This Kanban board is intended to make cross-team communication clearer and easier. <br/>
              This page is being served as a static UI for testing only.  <br />
              Changes made will not be saved.
            </p>
        

            <BoardList 
              boards={reducers.boards}
              days={reducers.days}
              buckets={reducers.buckets} 
              toggleBoard={toggleBoard}
              handleSave={handleSave}
              updateDays={updateDays}
              addItem={addItem}
              removeItem={removeItem}
              addTask={addTask}
              removeTask={removeTask}
              updateItem={updateItem}
              shiftTask={shiftTask}
              updateTask={updateTask}
            />

          </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => (
  {
    reducers: state
  }

)

export default connect(mapStateToProps)(App);
