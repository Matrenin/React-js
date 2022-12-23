import { createStore, compose, combineReducers } from 'redux'
import { profileReduser} from './profile/reducer'
import { messagesReducer } from './messages/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  profile: profileReduser,
  messages: messagesReducer
})

export const store = createStore(rootReducer, composeEnhancers())