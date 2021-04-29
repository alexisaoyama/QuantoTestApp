import { GET_USER_DETAILS, USER_DETAILS_ERROR } from '../constants';
import axios from 'axios';

const API_URL = 'https://reqres.in/api/users';

export const getUserDetails = id => async dispatch => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    dispatch({
      type: GET_USER_DETAILS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USER_DETAILS_ERROR,
      payload: console.log(e),
    });
  }
};
