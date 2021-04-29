import { GET_USERS_LIST, USERS_LIST_ERROR } from '../constants';
import axios from 'axios';

const API_URL = 'https://reqres.in/api/users';

export const getUsersList = () => async dispatch => {
  try {
    const res = await axios.get(API_URL);
    dispatch({
      type: GET_USERS_LIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_LIST_ERROR,
      payload: console.log(e),
    });
  }
};
