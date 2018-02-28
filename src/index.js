import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'https://react-hw-63.firebaseio.com/';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
