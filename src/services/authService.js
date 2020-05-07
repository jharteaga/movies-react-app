import http from './httpService';
import { authApiEndpoint } from '../config.json';

export function login(email, password) {
  return http.post(authApiEndpoint, { email, password });
}
