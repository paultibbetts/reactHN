import { IAction } from '../types';

const initialState = {};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        isFetching: true
      }
    case 'RECEIVE_DATA':
      return {
        ...state,
        isFetching: false,
        state: action.data
      };
    default:
      return state;
  }
};