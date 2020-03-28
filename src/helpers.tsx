import React from 'react';
import dompurify from 'dompurify';
import anchorme from 'anchorme';
import { ItemModel as Item } from './models/Item';
import CSS from 'csstype';

export const renderMarkup = (markup: string): { __html: string } => {
  const sanitized = dompurify.sanitize(markup);
  const anchored = anchorme(sanitized, {
    attributes: [
      {
        name: "rel",
        value: "nofollow noopener noreferrer"
      }
    ]
  });
  return ({ __html: anchored });
}

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
}

export const renderLoading = (): JSX.Element => {
  const styles: CSS.Properties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    fontSize: "2rem"
  };
  return (
    <div style={styles}>
      <span role="img" aria-label="loading…">🙈</span>
    </div>
  );
}

export const getPath = (data: Item): string => `/item/${data.id}`;

const isValidUrl = (string: string): boolean => {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
}

export const getLinkUrl = (data: Item): string =>
  isValidUrl(data.url) ?
    data.url :
    getPath(data)

export const setTitle = (title: string): void => {
  document.title = `${title ? ucFirst(title) + ' - ' : ''} React HN`;
}

export const ucFirst = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
