import { Actions, IAction, IStoreState } from '../types';

const initialState: IStoreState = {
  news: [],
  show: [],
  ask: [],
  newest: [],
  jobs: [],
  isFetching: false
}

export default (state: IStoreState = initialState, action: IAction): IStoreState => {
  switch (action.type) {
    case Actions.REQUEST_LIST:
      return {
        ...state,
        isFetching: true
      }
    case Actions.NEWS_LIST:
      return {
        ...state,
        isFetching: false,
        news: action.data,
      };
    case Actions.SHOW_LIST:
      return {
        ...state,
        isFetching: false,
        show: action.data,
      };
    case Actions.ASK_LIST:
      return {
        ...state,
        isFetching: false,
        ask: action.data,
      };
    case Actions.NEWEST_LIST:
      return {
        ...state,
        isFetching: false,
        newest: action.data,
      };
    case Actions.JOBS_LIST:
      return {
        ...state,
        isFetching: false,
        jobs: action.data,
      };
    default:
      return {
        ...state,
        isFetching: false
      }
  }
};
