import { combineReducers } from 'redux';

import categories from './categories/reducers';
import products from './products/reducers';

export default combineReducers({
  categories,
  products
});