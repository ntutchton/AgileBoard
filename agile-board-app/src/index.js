import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducers/board';

import './index.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from './customTheme';

import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

const store = createStore(
	RootReducer,
	window.devToolsExtension && window.devToolsExtension()
);

render(
	<Provider store={store}>
	    <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
			<App />
		</MuiThemeProvider>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
