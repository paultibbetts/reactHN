import React from 'react';
import dompurify from 'dompurify';
import anchorme from 'anchorme';

export const renderMarkup = (markup) => {
  const sanitized = dompurify.sanitize(markup);
  const anchored = anchorme(sanitized, {
    attributes: [
      {
        name: "rel",
        value: "nofollow noopener noreferrer"
      }
    ]
  });
  return ({__html: anchored});
}

export const scrollToTop = () => {
  window.scrollTo(0, 0);
}

export const renderLoading = () => {
  const styles = {
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

export const getPath = (data) => `/item/${data.id}`;

const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
}

export const getLinkUrl = (data) => 
isValidUrl(data.url) ?
  data.url :
  getPath(data)

export const setTitle = (title) => {
  document.title = `${title ? ucFirst(title) + ' - ' : '' } React HN`;
}

export const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
