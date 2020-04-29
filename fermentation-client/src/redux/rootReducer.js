import { combineReducers } from 'redux';
import projectReducer from './project/projectReducer'
import noteReducer from './note/noteReducer'

const rootReducer = combineReducers({
  project: projectReducer,
  notes: noteReducer
})

export default rootReducer