export const getCollection = (type, page) => 
  dispatch => {
    dispatch(processData('REQUEST_LIST', page));
    fetch(`https://node-hnapi.herokuapp.com/${type}?page=${page}`)
      .then(res => res.json())
      .then(data => {
        dispatch(processData(`${type.toUpperCase()}_LIST`, data));
      })
      .catch(err => {
        console.error(err);
      })
  };

export const getSingle = (type, id) =>
  dispatch => {
    dispatch(processData('REQUEST_DATA'));
    fetch(`https://node-hnapi.herokuapp.com/${type}/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(processData('RECEIVE_DATA', data));
      })
      .catch(err => {
        console.error(err);
      })
  };

const processData = (type, data) => {
  return {
    type, data
  };
}