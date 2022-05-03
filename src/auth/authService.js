import { authHeader } from './authHeader';

const localStorageKey = '__auth_provider_token__';

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }) => {
  const accesToken = user?.accesToken;

  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

export const register = async ({ username, password }) => {
  const user = JSON.stringify({ username: username, password: password });
  const res = await authHeader.post(`register`, user);

  if (res.status === 200) {
    return handleUserResponse(await res.data);
  } else {
    throw Error(err.message);
  }
};

export const login = async ({ username, password }) => {
  const res = await authHeader.post(`login`, { username, password });
  if (res.status === 200) {
    return handleUserResponse(await res.data);
  }
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);

export const authService = {
  register,
  login,
  logout,
};

export default authService;
