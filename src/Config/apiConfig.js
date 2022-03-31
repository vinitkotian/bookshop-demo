import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

const endpoints = {
  getBookDetailsByBookId: (bookId) => {
    return `${env.REACT_APP_API_URL}/book/${bookId}`;
  },
  placeBookOrder: () => {
    return `${env.REACT_APP_API_URL}/orders/place-order`;
  },
};

export default endpoints;
