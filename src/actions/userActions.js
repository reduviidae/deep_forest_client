// import { API_ROOT, BASIC_HEADERS } from '../constants';

export const authenticateUser = user => {
  return ({ type: "AUTH_USER", payload: user })
}
