import { combineReducers } from 'redux';
import projectReducer from './project/projectReducer'
import noteReducer from './note/noteReducer'
import userReducer from './user/userReducer'


const appReducer = combineReducers({
  project: projectReducer,
  notes: noteReducer,
  user: userReducer
})

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer