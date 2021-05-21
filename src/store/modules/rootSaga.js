import {all} from 'redux-saga/effects';

import login from './user/sagas';

export default function* rootSaga() {
  return yield all([login]);
}
