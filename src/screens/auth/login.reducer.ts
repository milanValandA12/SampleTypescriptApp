import {
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGOUT,
} from './login.actions';
import {Action, State} from '../../redux/reducers';

export interface ProfileInterface {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
}

const initialState: State = {fetching: false, data: null, err: null};

export const getProfile = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_PROFILE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_PROFILE_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    case GET_PROFILE_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    case LOGOUT:
      return {
        fetching: false,
        data: null,
        err: null,
      };
    default:
      return state;
  }
};
