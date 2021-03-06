export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const LOGOUT = 'LOGOUT';

export const getProfileRequest = (username: string) => {
  return {type: GET_PROFILE_REQUEST, payload: {username}};
};
export const getProfileSuccess = (data: object) => {
  return {type: GET_PROFILE_SUCCESS, payload: {data}};
};
export const getProfileFail = (err: object) => {
  return {type: GET_PROFILE_FAIL, payload: {err}};
};
export const doLgout = () => {
  return {type: LOGOUT};
};
