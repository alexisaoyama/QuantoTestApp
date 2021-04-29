import { GET_USER_DETAILS } from '../constants';

const initialState = {
  data: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
