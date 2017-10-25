import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from '../../customTheme';
import HeaderBar from '../../components/HeaderBar';

import logo from '../../Dish_Network_logo_2012.svg';
import styles from './App.scss';

class App extends Component {

  // state = {
    // boards:[{title:"Operations", active:true,}, {title:"Development", active:true,}]
  // }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
          
          <div className={styles.app}>
            <header className={styles.header}>
              <img src={logo} className={styles.logo} alt="logo" />
              <h1 className={styles.title}>AgileBoard <small>v0.0.1</small> </h1>
            </header>
            <p className={styles.intro}>
              This is an exploratory project in using IoT on the SCM/DCM team
            </p>
            <Route component={HeaderBar} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
