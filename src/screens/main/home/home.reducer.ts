import { Action, State } from '../../../redux/reducers';
import {
  GET_REPOSITORY_FAIL,
  GET_REPOSITORY_REQUEST,
  GET_REPOSITORY_SUCCESS,
} from './home.actions';

const initialState: State = {fetching: false, data: null, err: null};

export const getRepository = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case GET_REPOSITORY_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_REPOSITORY_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_REPOSITORY_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
