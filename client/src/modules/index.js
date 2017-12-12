import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import request from './request'

export default combineReducers({
  routing: routerReducer,
  counter,
  request
});

