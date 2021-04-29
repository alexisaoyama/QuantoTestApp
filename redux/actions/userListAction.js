import {
  GET_USER_LIST,
  GET_USER_LIST_FULFILLED,
  GET_USER_LIST_ERROR,
} from '../constants';

export const fetchUserList = bool => {
  return {
    type: GET_USER_LIST,
    payload: bool,
  };
};

export const fetchUserListFulfilled = data => {
  return {
    type: GET_USER_LIST_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const fetchUserListError = error => {
  return {
    type: GET_USER_LIST_ERROR,
    payload: error,
    loading: false,
  };
};
