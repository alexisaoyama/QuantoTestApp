import {
  fetchUserList,
  fetchUserListFulfilled,
  fetchUserListError,
} from '../redux/actions/userListAction';
import axios from 'axios';

export const getUserList = (page, per_page) => {
  return dispatch => {
    dispatch(fetchUserList(true));
    axios
      .get('https://reqres.in/api/users', {
        params: { page: page, per_page: per_page },
      })
      .then(res => {
        dispatch(fetchUserListFulfilled(res.data));
      })
      .catch(e => dispatch(fetchUserListError(e)));
  };
};
