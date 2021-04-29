import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_FULFILLED,
  GET_USER_DETAILS_ERROR,
} from '../constants';

export const fetchUserDetails = bool => {
  return {
    type: GET_USER_DETAILS,
    payload: bool,
  };
};

export const fetchUserDetailsFulfilled = data => {
  return {
    type: GET_USER_DETAILS_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const fetchUserDetailsError = error => {
  return {
    type: GET_USER_DETAILS_ERROR,
    payload: error,
    loading: false,
  };
};
