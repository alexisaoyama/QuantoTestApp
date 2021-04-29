import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersListReducer from '../reducers/usersListReducer';
import userDetailsReducer from '../reducers/userDetailsReducer';

const rootReducer = combineReducers({
  usersList: usersListReducer,
  userDetails: userDetailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
