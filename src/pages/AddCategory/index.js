import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import Button from '../../components/Button';

import { createRequest } from '../../store/modules/categories/actions';


import './style.css';

export default function AddCategory() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.categories.category);

  function handleSubmit(data){
    dispatch(createRequest(data));
  }
  
  return (
    <>
      <div className="Container">
        <h1>Cadastrar <br/> -Categorias</h1>

          <Form className="Form" initialData={category} onSubmit={handleSubmit}>
            <Input className="Input" name="name" placeholder="Nome da Categoria" />
            <Input className="Input" name="description" placeholder="Descrição da Categoria" />

            <Button type="submit" value="Cadastrar" />
          </Form>
    </div>
    </>
    );
}