import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//
import RaisedButton from 'material-ui/RaisedButton';

import logo from '../../logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.app}>
          <header className={styles.header}>
            <img src={logo} className={styles.logo} alt="logo" />
            <h1 className={styles.title}>Welcome to React</h1>
          </header>
          <p className={styles.intro}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RaisedButton label="Material UI" />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
