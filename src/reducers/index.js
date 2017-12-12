import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const AllReducers = combineReducers({
    user: UserReducer,
    activeUser: ActiveUserReducer
});
export default AllReducers;