import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User as UserModel } from '../../services/node-hnapi';
import { AppThunk } from '../../store';
import { api } from '../../services/node-hnapi';

export interface User {
    user: UserModel
}

export interface UserState extends User {
    isFetching: boolean,
}

const initialState: UserState = {
    isFetching: false,
    user: {} as UserModel
}

const userSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        requestUser: state => {
            state.isFetching = true;
        },
        receiveUser: (state, action: PayloadAction<UserModel>) => {
            state.isFetching = false;
            state.user = action.payload;
        },
    },
});

export const { requestUser, receiveUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (id: string): AppThunk => async dispatch => {
    dispatch(requestUser());
    api.getUser(id)
        .then((data) => {
            dispatch(receiveUser(data))
        })
        .catch(err => {
            console.error(err)
        });
    
}