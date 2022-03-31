import axios from 'axios';

const makeGetApiCall = async (endpoint, options) => {
  const response = await axios.get(endpoint, options);
  return response;
};

const makePostApiCall = async (endpoint, body, options) => {
  const response = await axios.post(endpoint, body, options);
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
