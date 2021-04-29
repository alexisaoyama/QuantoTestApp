import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_FULFILLED,
  GET_USER_DETAILS_ERROR,
} from '../constants';

const initialState = {
  userDetails: {
    data: {
      id: 0,
      email: '',
      first_name: '',
      last_name: '',
      avatar: '',
    },
    loading: true,
    errorMessage: '',
  },
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      return { ...state, loading: action.payload };
    case GET_USER_DETAILS_FULFILLED:
      return { ...state, userDetails: action.payload, loading: action.loading };
    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
