import { call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { getRepositoryFail, getRepositoySuccess, GET_REPOSITORY_REQUEST } from './home.actions';
import { getRepositoryByCriteria } from '../../../api/respository';
import { Action } from '../../../redux/reducers';

export function* watchGetRepository() {
  yield takeLatest(GET_REPOSITORY_REQUEST, handleGetRepository);
}

function* handleGetRepository(action: Action) {
  try {
    const response = yield call(getRepositoryByCriteria, action.payload);
    yield put(getRepositoySuccess(response.data));
  } catch (error) {
    yield put(getRepositoryFail(error));
    console.log({ error })
  }
}
