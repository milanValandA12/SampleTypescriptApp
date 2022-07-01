import { PaginationInterface } from "../../../interfaces/common/Pagination.interface";

export const GET_REPOSITORY_REQUEST = 'GET_REPOSITORY_REQUEST';
export const GET_REPOSITORY_SUCCESS = 'GET_REPOSITORY_SUCCESS';
export const GET_REPOSITORY_FAIL = 'GET_REPOSITORY_FAIL';

export const getRepositoryRequest = (payload: PaginationInterface) => {
  return {type: GET_REPOSITORY_REQUEST, payload};
};
export const getRepositoySuccess = (data: object) => {
  return {type: GET_REPOSITORY_SUCCESS, payload: {data}};
};
export const getRepositoryFail = (err: object) => {
  return {type: GET_REPOSITORY_FAIL, payload: {err}};
};
