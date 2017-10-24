import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TestButton from '../../components/TestButton';

import logo from '../../logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          
          <div className={styles.app}>
            <header className={styles.header}>
              <img src={logo} className={styles.logo} alt="logo" />
              <h1 className={styles.title}>Welcome to React</h1>
            </header>
            <p className={styles.intro}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Route component={TestButton} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
