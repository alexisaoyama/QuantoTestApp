import {
  GET_USER_LIST,
  GET_USER_LIST_FULFILLED,
  GET_USER_LIST_ERROR,
} from '../constants';

const initialState = {
  userList: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
  },
  loading: true,
  errorMessage: '',
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return { ...state, loading: action.payload };
    case GET_USER_LIST_FULFILLED:
      return { ...state, userList: action.payload, loading: action.loading };
    case GET_USER_LIST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default userListReducer;
