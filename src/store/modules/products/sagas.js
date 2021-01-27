import {  takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { createSuccess, createFailure } from './actions';

export function* createProduct({ payload }) {
  try {    
    const {  name, idcategorie, description, unit, code, unitaryvalue, url} = payload.data;

    const item = Object.assign(
      { name, idcategorie, description, unit, code, unitaryvalue, url},
    );

    console.log('data', item);


    const response = yield call(api.post, '/products', item);    
    toast.success('Produto cadastrado com sucesso');

    yield put(createSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao cadastrar produto.');
    yield put(createFailure());
    
  }
}

export default all([
  takeLatest('@products/CREATE_REQUEST', createProduct),
]);