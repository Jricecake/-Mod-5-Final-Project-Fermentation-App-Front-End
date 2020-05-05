import { combineReducers } from 'redux';
import projectReducer from './project/projectReducer'
import noteReducer from './note/noteReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  project: projectReducer,
  notes: noteReducer,
  user: userReducer
})

export default rootReducer