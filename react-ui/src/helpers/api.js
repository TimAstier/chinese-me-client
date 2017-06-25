import axios from 'axios';
import checkNetwork from './checkNetwork';

export function apiCall(data, fetch, success, fail) {
  return dispatch =>
    dispatch(fetch(data))
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(err => {
        console.log(err); // eslint-disable-line no-console
        dispatch(fail());
        const type = 'error';
        const text = checkNetwork(err);
        console.log({ type, text });
      });
}

export function Api() {
  this.get = (url) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api` + url);
  };
  this.post = (url, data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/api` + url, data);
  };
}
