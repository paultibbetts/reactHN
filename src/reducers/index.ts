import { combineReducers } from 'redux';
import collections from './collections';
import data from './data';

const rootReducer = combineReducers({
  collections,
  data
});

export default rootReducer;