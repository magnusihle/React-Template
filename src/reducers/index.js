import { combineReducers } from 'redux'
import { authenticate } from './admin-reducer';

const rootReducer = combineReducers({
  authenticate,
})

export default rootReducer