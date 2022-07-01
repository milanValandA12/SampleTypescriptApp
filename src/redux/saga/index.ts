import {all} from 'redux-saga/effects';
import {watchGetProfile} from '../../screens/auth/login.saga';
import { watchGetRepository } from '../../screens/main/home/home.saga';

export default function* rootSaga() {
  yield all([watchGetProfile(), watchGetRepository()]);
}
