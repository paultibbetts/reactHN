import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { getUser } from '../../features/user/userSlice';
import User from '../../components/User';

export const UserFeature = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { user: data } = useSelector((state: RootState) => state);

    useEffect(() => {
        if (id) {
            dispatch(getUser(id))
        }
    }, [id, dispatch])

    return (
        <User
            user={data.user}
            isFetching={data.isFetching}
        />
    )
}