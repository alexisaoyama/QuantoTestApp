import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userListReducer from '../reducers/userListReducer';
import userDetailsReducer from '../reducers/userDetailsReducer';

const rootReducer = combineReducers({
  userList: userListReducer,
  userDetails: userDetailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
