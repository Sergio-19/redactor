
import {applyMiddleware, combineReducers} from 'redux'
import { legacy_createStore as createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { mainReducer } from './mainReducer'


const rootReducer = combineReducers({
  mainReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;