import { ItemModel } from '../models/Item';

export interface ICollectionState {
  news: ItemModel[],
  newest: ItemModel[],
  show: ItemModel[],
  ask: ItemModel[],
  jobs: ItemModel[],
}

export type CollectionTypes = keyof ICollectionState;

export enum Actions {
  REQUEST_LIST = 'REQUEST_LIST',
  NEWS_LIST = 'NEWS_LIST',
  SHOW_LIST = 'SHOW_LIST',
  ASK_LIST = 'ASK_LIST',
  NEWEST_LIST = 'NEWEST_LIST',
  JOBS_LIST = 'JOBS_LIST',
  REQUEST_DATA = 'REQUEST_DATA',
  RECEIVE_DATA = 'RECEIVE_DATA'
}

export interface IAction {
  type: Actions,
  data: any
}

export interface IStoreState extends ICollectionState {
  isFetching: boolean
}