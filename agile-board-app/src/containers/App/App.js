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
import styles from './App.scss';

class App extends Component {

 static propTypes = {
    reducers: PropTypes.object.isRequired
  };

  render() {

    const { dispatch, reducers } = this.props;
    const toggleBoard = bindActionCreators(BoardActionCreators.toggleBoard, dispatch);
    const handleSave = bindActionCreators(BoardActionCreators.handleSave, dispatch);
    const updateDays = bindActionCreators(DayActionCreators.updateDays, dispatch);
    const addTask = bindActionCreators(BucketActionCreators.addTask, dispatch);
    const removeTask = bindActionCreators(BucketActionCreators.removeTask, dispatch);

    return (
      <BrowserRouter>
          
          <div className={styles.app}>
            <header className={styles.header}>
              <img src={logo} className={styles.logo} alt="logo" />
              <h1 className={styles.title}>AgileBoard <small>v0.0.1</small> </h1>
            </header>
            <p className={styles.intro}>
              This is an exploratory project in using IoT on the SCM/DCM team. <br/>
              This page is being served as a static UI.  Changes made will not be saved.
            </p>
        

            <BoardList 
              boards={reducers.boards}
              days={reducers.days}
              buckets={reducers.buckets} 
              toggleBoard={toggleBoard}
              handleSave={handleSave}
              updateDays={updateDays}
              addTask={addTask}
              removeTask={removeTask}
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
