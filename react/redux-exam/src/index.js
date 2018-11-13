import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
// import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const store = createStore(reducers,applyMiddleware(logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


