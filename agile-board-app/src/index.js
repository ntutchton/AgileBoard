import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import Store from './store';
import './index.scss';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

const StoreInstance = Store();

ReactDOM.render(
	<Provider store={StoreInstance}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
