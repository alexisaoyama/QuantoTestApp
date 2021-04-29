import {
  fetchUsersList,
  fetchUsersListFulfilled,
  fetchUsersListError,
} from '../redux/actions/usersListAction';
import axios from 'axios';

export const getUsersList = () => {
  return dispatch => {
    dispatch(fetchUsersList(true));
    axios
      .get('https://reqres.in/api/users')
      .then(res => {
        dispatch(fetchUsersListFulfilled(res.data));
      })
      .catch(e => dispatch(fetchUsersListError(e)));
  };
};
