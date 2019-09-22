import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import { reposApp } from './store/reducers';

ReactDOM.render(
    <Provider store={ createStore(reposApp, applyMiddleware(thunkMiddleware)) }>
        <App />
    </Provider>,
    document.getElementById('root')
);