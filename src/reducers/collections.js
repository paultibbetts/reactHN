const initialState = {
  news: [],
  show: [],
  ask: [],
  newest: [],
  jobs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LIST':
      return {
        ...state,
        isFetching: true
      }
    case 'NEWS_LIST':
      return {
        ...state,
        isFetching: false,
        news: action.data,
      };
    case 'SHOW_LIST':
      return {
        ...state,
        isFetching: false,
        show: action.data,
      };
    case 'ASK_LIST':
      return {
        ...state,
        isFetching: false,
        ask: action.data,
      };
    case 'NEWEST_LIST':
      return {
        ...state,
        isFetching: false,
        newest: action.data,
      };
    case 'JOBS_LIST':
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
