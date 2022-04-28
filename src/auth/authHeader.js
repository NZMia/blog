import axios from 'axios';
import { getToken } from './authProvider';

// Todo: debugger API_URL is underfined
// const API_URL = process.env.REACT_APP_API_URL;
// console.info('API_URL', process.env);

// Todo: jwt_waiting backend updates
// const authorization = getToken ?  'Bearer' + getToken : '';

export const authHeader = axios.create({
  baseURL: 'http://localhost:5051/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': authorization
  },
});
