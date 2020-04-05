import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

api.interceptors.response.use(
  (response) => {
    localStorage.setItem(
      'x-ratelimit',
      JSON.stringify({
        remaining: response.headers['x-ratelimit-remaining'],
        reset: response.headers['x-ratelimit-reset'],
      }),
    );
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
