import qs from 'qs';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export const http = async (
  endpoint,
  { data, token, headers, ...customConfig }
) => {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return (axios.create = {
    baseURL: `${API_URL}/${endpoint}`,
    withCredentials: false,
    config,
  });
};
