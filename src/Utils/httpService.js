import axios from 'axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

const makeGetApiCall = async (url, options) => {
  const response = await axios.get(`${env.REACT_APP_API_URL}${url}`, options);
  return response;
};

const makePostApiCall = async (url, body, options) => {
  const response = await axios.post(
    `${env.REACT_APP_API_URL}${url}`,
    body,
    options
  );
  return response;
};

const httpService = () => {
  return {
    get: async (url, options = {}) => {
      const response = await makeGetApiCall(url, options);
      return response;
    },
    post: async (url, body = {}, options = {}) => {
      const response = await makePostApiCall(url, body, options);
      return response;
    },
  };
};

export default httpService;
