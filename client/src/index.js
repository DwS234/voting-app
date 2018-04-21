import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Import external libraries
import { BrowserRouter } from 'react-router-dom';

const AppMain = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.render(<AppMain />, document.getElementById('root'));
registerServiceWorker();
