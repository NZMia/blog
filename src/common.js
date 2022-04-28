import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5051/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
