import { GET_USERS_LIST } from '../constants';

const initialState = {
  page: 0,
  per_page: 0,
  total: 0,
  total_pages: 0,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LIST:
      return action.payload;
    default:
      return state;
  }
}
