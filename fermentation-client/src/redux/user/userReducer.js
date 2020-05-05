import { FETCH_USER_REQUEST,
FETCH_USER_SUCCESS,
LOGIN_USER,
FETCH_USER_FAILURE,
POST_USER_FAILURE,
POST_USER_SUCCESS } from './userTypes'



const initialState = {
  currentUser: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USER_REQUEST:
      return{
        ...state,
        loading: true
      }
      case FETCH_USER_SUCCESS:
        return{
          ...state,
          loading: false,
          user: action.payload
        }
        case LOGIN_USER:
          return {
            ...state,
            currentUser: action.payload
          }
      default:
        return state
  }
}

export default userReducer