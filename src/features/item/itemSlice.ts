import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import { api } from '../../services/node-hnapi';
import { Item as ItemModel } from '../../services/node-hnapi';

export interface Items {
    item: ItemModel
}

export interface ItemState extends Items {
    isFetching: boolean,
}

const initialState: ItemState = {
    isFetching: false,
    item: {} as ItemModel
}

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        requestItem: state => {
            state.isFetching = true;
        },
        receiveItem: (state, action: PayloadAction<{ id: string, data: ItemModel}>) => {
            const { id, data } = action.payload;
            state.isFetching = false;
            state.item = data;
        },
    },
});

export const { requestItem, receiveItem } = itemSlice.actions;

export default itemSlice.reducer;

export const getItem = (id: string): AppThunk => async dispatch => {
    dispatch(requestItem());
    api.getItem(id)
        .then((data) => {
            dispatch(receiveItem({ id, data }))
        })
        .catch(err => {
            console.error(err)
        });
    
}