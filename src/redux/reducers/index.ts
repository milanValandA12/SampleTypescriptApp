import {combineReducers} from 'redux';

import {CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL} from './../actions';

import {getProfile} from '../../screens/auth/login.reducer';

export interface State {
  fetching: boolean;
  data: any;
  err: any;
}

export interface Action {
  type: string;
  payload: any;
}

const initialState = {fetching: false, data: null, err: null};

const sendNetworkFail = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SEND_NETWORK_FAIL:
      return {
        err: action.payload.err,
      };
    case CLEAR_NETWORK_FAIL:
      return {
        err: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({sendNetworkFail, getProfile});
export default rootReducer;
