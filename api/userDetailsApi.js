import {
  fetchUserDetails,
  fetchUserDetailsFulfilled,
  fetchUserDetailsError,
} from '../redux/actions/userDetailsAction';
import axios from 'axios';

export const getUserDetails = id => {
  return dispatch => {
    dispatch(fetchUserDetails(true));
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then(res => {
        dispatch(fetchUserDetailsFulfilled(res.data));
      })
      .catch(e => dispatch(fetchUserDetailsError(e)));
  };
};
