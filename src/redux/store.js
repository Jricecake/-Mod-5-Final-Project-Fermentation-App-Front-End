import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'


let saveToLocalStore = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}
let loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage()

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)
));

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  
//   )
store.subscribe(()=> saveToLocalStore(store.getState()))

export default store;