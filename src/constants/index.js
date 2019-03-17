export const API_ROOT = 'http://localhost:3000/api/v1/';
export const AUTH_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `${localStorage.token}`
  };

export const BASIC_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
