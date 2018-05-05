import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers/reducer';
import thunk from 'redux-thunk';

//Import external libraries
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), compose(applyMiddleware(thunk)));

const AppMain = () => (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>	
);

ReactDOM.render(<AppMain />, document.getElementById('root'));
registerServiceWorker();
