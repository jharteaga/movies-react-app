import jwtDecode from 'jwt-decode';
import http from './httpService';
import { authApiEndpoint, tokenKey } from '../config.json';

export async function login(email, password) {
  const { data: jwt } = await http.post(authApiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
};
