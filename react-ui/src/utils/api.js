import axios from 'axios';
// import checkNetwork from './checkNetwork';

const API_BASE_URL = process.env.REACT_APP_API_URL + '/api';

const get = endpoint => {
  return axios.get(API_BASE_URL + endpoint);
};

const post = (endpoint, data) => {
  return axios.post(API_BASE_URL + endpoint, data);
};

const Api = { get, post };

export default Api;
