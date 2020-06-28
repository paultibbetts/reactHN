import React, { useEffect } from 'react';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Item from '../../components/Item';
import { getItem } from '../../features/item/itemSlice';

import {
    scrollToTop,
    setTitle
} from '../../helpers';

export const ItemFeature = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { item, isFetching } = useSelector((state: RootState) => state.items);

    useEffect(() => {
        scrollToTop();
      }, [])

    useEffect(() => {
    if (id) {
        dispatch(getItem(id));
    }
    }, [id, dispatch])

    useEffect(() => {
        if (item && item.title) {
          setTitle(item.title)
        }
      }, [item])

    return (
        <Item
            item={item}
            isFetching={isFetching}
        />
    )
}