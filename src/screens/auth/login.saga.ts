import {call, put, takeLatest} from 'redux-saga/effects';
import {
  GET_PROFILE_REQUEST,
  getProfileFail,
  getProfileSuccess,
} from './login.actions';
import {getProfile} from '../../api/profile';
import {Action} from '../../redux/reducers';

export function* watchGetProfile() {
  yield takeLatest(GET_PROFILE_REQUEST, handleGetProfile);
}

function* handleGetProfile(action: Action) {
  try {
    const response = yield call(getProfile, action.payload);
    yield put(getProfileSuccess(response.data));
  } catch (error) {
    yield put(getProfileFail(error));
  }
}
