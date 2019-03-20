export const API_ROOT = 'http://localhost:3000/api/v1/';
export const CABLE = 'ws://localhost:3000/api/v1/cable';
export const AUTH_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `${localStorage.token}`
  };

export const BASIC_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  export const HEADERS = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `${localStorage.token}`
    };

export const PUB_KEY = `pub-c-b19b4550-28e5-4e8b-99df-2320a631698b`;
export const SUB_KEY = `sub-c-056dc350-4b25-11e9-b0df-968893e54af3`;
