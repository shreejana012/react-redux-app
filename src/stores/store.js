import { createStore , applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import AllReducers from './reducers';


const logger = createLogger();
const store = createStore(
    AllReducers,
    applyMiddleware(thunk, promise, logger)
);