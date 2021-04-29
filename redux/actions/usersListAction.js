import {
  GET_USERS_LIST,
  GET_USERS_LIST_FULFILLED,
  GET_USERS_LIST_ERROR,
} from '../constants';

export const fetchUsersList = bool => {
  return {
    type: GET_USERS_LIST,
    payload: bool,
  };
};

export const fetchUsersListFulfilled = data => {
  return {
    type: GET_USERS_LIST_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const fetchUsersListError = error => {
  return {
    type: GET_USERS_LIST_ERROR,
    payload: error,
    loading: false,
  };
};
