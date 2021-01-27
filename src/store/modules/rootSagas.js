import { all } from 'redux-saga/effects';

import categories from './categories/sagas';
import products from './products/sagas';

export default function* rootSaga() {
  return yield all([categories, products]);
}