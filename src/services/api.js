import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
