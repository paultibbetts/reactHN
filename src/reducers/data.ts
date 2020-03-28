import { IAction, Actions } from '../types';

const initialState = {};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case Actions.REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      }
    case Actions.RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        state: action.data
      };
    default:
      return state;
  }
};