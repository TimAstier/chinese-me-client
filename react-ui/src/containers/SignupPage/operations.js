import { Api } from '../../helpers/api';

const api = new Api();

export function userSignupRequest(userData) {
  return () => {
    return api.post('/users', userData);
  };
}

export function isUserExists(identifier) {
  return () => {
    return api.get(`/users/${identifier}`);
  };
}
