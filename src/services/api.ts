import axios from 'axios';
import {REACT_APP_URL, REACT_APP_APP_ID} from '@env';

const defaultOptions = {
  baseURL: REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

let axiosClient = axios.create(defaultOptions);

axiosClient.interceptors.request.use(function (config: any) {
  if (config && config.headers && REACT_APP_APP_ID) {
    config.headers['app-id'] = REACT_APP_APP_ID;
  }
  return config;
});

export default axiosClient;
