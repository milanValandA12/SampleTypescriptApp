import {all} from 'redux-saga/effects';
import {watchGetProfile} from '../../screens/auth/login.saga';

export default function* rootSaga() {
  yield all([watchGetProfile()]);
}
