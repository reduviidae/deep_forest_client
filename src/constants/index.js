export const API_ROOT = 'https://deep-forest-api.herokuapp.com/api/v1/';
export const CABLE = 'ws://deep-forest-api-rpc.herokuapp.com/cable';
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
export const JWT_SECRET = `littlefatdogggies`;
export const GAME_ID = 5;
export const DRAWING_ID = 5;
