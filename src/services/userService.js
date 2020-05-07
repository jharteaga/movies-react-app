import http from './httpService';
import { userApiEndpoint } from '../config.json';

export function register(user) {
  return http.post(userApiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
