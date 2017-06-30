import axios from 'axios';
// import checkNetwork from './checkNetwork';

const get = url => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api` + url);
};

const post = (url, data) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/api` + url, data);
};

const Api = { get, post };

export default Api;
