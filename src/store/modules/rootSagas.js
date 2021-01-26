import { all } from 'redux-saga/effects';

import categories from './categories/sagas';

export default function* rootSaga() {
  return yield all([categories]);
}