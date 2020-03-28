import { Dispatch } from 'redux';
import { Actions } from '../types';

const API_URL = 'https://node-hnapi.herokuapp.com/';

export const getCollection = (type: string, page: string) =>
  (dispatch: Dispatch) => {
    dispatch(processData(Actions.REQUEST_LIST, page));
    fetch(`${API_URL}${type}?page=${page}`)
      .then(res => res.json())
      .then((data: string) => {
        dispatch(processData(`${type.toUpperCase()}_LIST`, data));
      })
      .catch(err => {
        console.error(err);
      })
  };

export const getSingle = (type: string, id: string) =>
  (dispatch: Dispatch) => {
    dispatch(processData(Actions.REQUEST_DATA));
    fetch(`${API_URL}${type}/${id}`)
      .then(res => res.json())
      .then((data: string) => {
        dispatch(processData(Actions.RECEIVE_DATA, data));
      })
      .catch(err => {
        console.error(err);
      })
  };

const processData = (type: string, data?: string) => {
  return {
    type, 
    data
  };
}