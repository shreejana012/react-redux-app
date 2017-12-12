import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import AllReducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

export const store = createStore(
    AllReducers,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            promise, 
            loggerMiddleware
        ))
);

