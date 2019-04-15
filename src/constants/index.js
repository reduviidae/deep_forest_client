// export const API_ROOT = 'https://deep-forest-api.herokuapp.com/api/v1/';
// export const CABLE = 'wss://deep-forest-api-rpc.herokuapp.com/cable';
export const API_ROOT = 'http://localhost:3000/api/v1/';
export const CABLE = 'ws://localhost:3334/cable';
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
export const JWT_SECRET = `littlefatdogggies`;
export const GAME_ID = 5;
export const DRAWING_ID = 5;
