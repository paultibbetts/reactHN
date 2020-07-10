import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { getCollection, CollectionType } from './collectionSlice';
import { scrollToTop, setTitle } from '../../helpers';
import Collection from '../../components/Collection';

export interface Props {
    type: CollectionType
}  

export const CollectionFeature = (props: Props) => {

    const { type } = props;
    const { path, page } = useParams();
    const { collections } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    
    const pageNumber: string = page?.toString() || '1';
    
    useEffect(() => {
        scrollToTop();
    },[]);

    useEffect(() => {
        setTitle(type === 'news' ? 'Top' : type);
        dispatch(getCollection(type, pageNumber));
    }, [type, pageNumber, dispatch]);

    if (Number(page) > 10 && path) {
        return (
          <Redirect to={path.replace(':page', '10')} />
        );
      }

    return (
        <Collection
            type={type}
            collection={collections[type]}
            isFetching={collections.isFetching}
            page={Number(page) || 1}
            path={path}
        />
    )
}