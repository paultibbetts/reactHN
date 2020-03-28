import { combineReducers } from 'redux';
import collectionSlice from '../features/collection/collectionSlice';
import itemSlice from '../features/item/itemSlice';
import userSlice from '../features/user/userSlice';

const rootReducer = combineReducers({
  collections: collectionSlice,
  items: itemSlice,
  user: userSlice
});

export default rootReducer;