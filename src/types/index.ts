export interface IItem {
  id: number,
  title: string,
  domain: string,
  points: number,
  user: string,
  time_ago: string,
  type: string,
  comments: any[],
  comments_count: number,
  url: string
}

export interface ICollectionState {
  news: IItem[],
  newest: IItem[],
  show: IItem[],
  ask: IItem[],
  jobs: IItem[],
}

export interface IUser {
  id: number,
  created_time: number,
  created: string,
  karma: number,
  avg: null,
  about: string
}

export interface IAction {
  type: string,
  data: any
}

export type CollectionTypes = keyof ICollectionState;

export interface IStoreState extends ICollectionState {
  isFetching: boolean
}