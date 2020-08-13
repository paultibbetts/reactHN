import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import { Collection as CollectionModel, api } from '../../services/node-hnapi';

export interface Collections {
    news: CollectionModel,
    newest: CollectionModel,
    show: CollectionModel,
    ask: CollectionModel,
    jobs: CollectionModel,
}
  
export type CollectionType = keyof Collections;

export interface CollectionsState extends Collections {
    isFetching: boolean
}

const initialState: CollectionsState = {
    news: [],
    show: [],
    ask: [],
    newest: [],
    jobs: [],
    isFetching: false
}

const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        requestList: state => {
            state.isFetching = true;
        },
        receiveList: (state, action: PayloadAction<{type: CollectionType, data: CollectionModel}>) => {
            const { type, data } = action.payload;
            state.isFetching = false;
            state[type] = data;
        },
    },
});

export const { requestList, receiveList } = collectionsSlice.actions;

export default collectionsSlice.reducer;

export const getCollection = (
    type: keyof Collections, 
    page: string
): AppThunk => async dispatch => {
    dispatch(requestList());
    api.getCollection(type, page)
        .then((data) => {
            dispatch(receiveList({type, data}))
        })
        .catch(err => {
            console.error(err)
        });
    
}