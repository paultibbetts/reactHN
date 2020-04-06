import React from 'react';
import Story from '../Story';
import Loading from '../Loading';
import Pagination from '../Pagination';

import { 
  Story as StoryModel,
  Collection as CollectionModel
} from '../../services/node-hnapi';

import { CollectionType } from '../../features/collection/collectionSlice';

interface Props {
  type: CollectionType,
  collection: CollectionModel
  isFetching: boolean,
  path?: string,
  page: number
}

export const Collection = (props: Props) => {

  const {
    type,
    collection,
    isFetching,
    path,
    page = '1',
  } = props;

  const pageNumber: string = page.toString() || '1';

  const renderList = (data: StoryModel[], perPage: number) => {
    return (
      <div className="bg-white">
        <ol>
          {renderStories(data, perPage)}
        </ol>
      </div>
    );
  }

  const renderStories = (data: StoryModel[], perPage: number) => {
    return data.map((data, index: number) => (
      <li key={index}>
        <Story
          key={index}
          index={index}
          data={data}
          page={pageNumber}
          perPage={perPage}
        />
      </li>
    ));
  }

  const renderContent = (content: StoryModel[]) => {

    if (isFetching) {
      return <Loading />;
    }
    
    if (content.length > 0) {
      return (
        <div>
          {renderList(content, content.length)}
          <div className="my-4">
            <Pagination 
              page={pageNumber ? pageNumber : '1'} 
              type={type}
            />
          </div>
        </div>
      );
    }
    else if (!isFetching && path) {
      const url = path.replace(':page?', (Number(pageNumber) - 1).toString());
      return (
        <div className="p-4 bg-white">
          <p>There's nothing to show here…</p>
          <a href={url}>
            Try the previous page?
          </a>
        </div>
      );
    }
  }

  return (
    <div>
      {renderContent(collection)}
    </div>
  );
}