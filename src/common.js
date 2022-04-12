import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: 'http://localhost:5051/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
