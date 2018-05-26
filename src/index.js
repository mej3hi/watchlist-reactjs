import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Watchlist from './containers/Watchlist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Watchlist />, document.getElementById('root'));
registerServiceWorker();
