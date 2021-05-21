import {all, call, put, takeLatest} from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';

import {LoginRequest, LoginFailure} from './actions';

export function* Login({payload: {email, password}}) {
  try {
    const authentication = auth();
    const data = yield call(
      [authentication, authentication.signInWithEmailAndPassword],
      email,
      password,
    );

    yield put(LoginRequest(data.user));
  } catch (error) {
    yield put(LoginFailure());
    // crashlytics().recordError(error);
    console.log('ERROR => ', error);
  }
}

export default all([takeLatest('@login/LOGIN_REQUEST', Login)]);
