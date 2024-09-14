import axios from 'axios';

export const eventInstance = axios.create({
  baseURL: '/event',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
