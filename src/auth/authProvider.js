import { authHeader } from './authHeader';

const localStorageKey = '__auth_provider_token__';

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }) => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

const register = async ({ username, password }) => {
  const res = await authHeader.post(`register`, { username, password });
  return handleUserResponse(await res.data.json);
};

const login = async ({ username, password }) => {
  const res = await authHeader.post(`login`, { username, password });
  return handleUserResponse(await res.data.json);
};

const logout = () => window.localStorage.removeItem(localStorageKey);

const authService = {
  register,
  login,
  logout,
};

export default authService;
