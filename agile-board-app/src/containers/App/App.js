import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

///
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BoardActionCreators from '../../actions/board';

import Board from '../../components/Board';

import logo from '../../Dish_Network_logo_2012.svg';
import styles from './App.scss';

class App extends Component {

 static propTypes = {
    boards: PropTypes.array.isRequired
  };

  render() {

    const { dispatch, boards } = this.props;
    const toggleBoard = bindActionCreators(BoardActionCreators.toggleBoard, dispatch);



    return (
      <BrowserRouter>
          
          <div className={styles.app}>
            <header className={styles.header}>
              <img src={logo} className={styles.logo} alt="logo" />
              <h1 className={styles.title}>AgileBoard <small>v0.0.1</small> </h1>
            </header>
            <p className={styles.intro}>
              This is an exploratory project in using IoT on the SCM/DCM team
            </p>
          </div>



      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => (
  {
    boards: state
  }

)

export default connect(mapStateToProps)(App);
