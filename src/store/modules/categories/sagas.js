import {  takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { createSuccess, createFailure } from './actions';

export function* createCategory({ payload }) {
  try {
    
    const {  name, description} = payload.data;

    const category = Object.assign(
      { name, description},
    );

    const response = yield call(api.post, '/categories', category);    
    toast.success('Perfil atualizado com sucesso');

    yield put(createSuccess(response.data));
  } catch (err) {
    toast.error('eeErro ao atualizar perfil.');
    yield put(createFailure());
    
  }
}

export default all([
  takeLatest('@categories/CREATE_REQUEST', createCategory),
]);