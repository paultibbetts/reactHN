import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import { api } from '../../services/node-hnapi';
import { Collection } from '../../services/node-hnapi';

export interface Collections {
    news: Collection,
    newest: Collection,
    show: Collection,
    ask: Collection,
    jobs: Collection,
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
        receiveList: (state, action: PayloadAction<{type: CollectionType, data: Collection}>) => {
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