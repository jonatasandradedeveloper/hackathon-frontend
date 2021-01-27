import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import Button from '../../components/Button';

import { createRequest } from '../../store/modules/products/actions';
import api from "../../services/api";

import './style.css';

export default function AddProduct() {
  const [categories, setCategories] = useState([]);
  console.log(categories)
  useEffect(() => {
    api.get("categories").then((response) => {
      setCategories(response.data);
    });
  }, [setCategories]);

  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  function handleSubmit(data){
    dispatch(createRequest(data));
  }

  const options = [
    { id: '5', title: 'Pizza Doce' },
    { id: '6', title: 'Pizza Salgada' },
    { id: '7', title: 'Refrigerantes' },
    { id: '8', title: 'Lanches' },
  ];
  
  
  return (
    <>
      <div className="ContainerP">
        <h1>Cadastrar <br/> -Produtos</h1>
        
          <Form className="FormP" initialData={product} onSubmit={handleSubmit}>
            <Input className="InputP" name="name" placeholder="Nome do Produto" />
            <Input className="InputP" name="description" placeholder="Descrição do Produto" />

            <Select  className="Selectd"  name="idcategorie" options={options} />
            {/* <select 
              className="Selectd" 
              name="idcategorie"
              >
            {categories.map((category) =>
              <option value={category.id}>{category.name}</option>
            )}
            </select> */}

            <Input className="InputP" name="unit" placeholder="Quantidade" />
            <Input className="InputP" name="code" placeholder="Codigo de barras" />
            <Input className="InputP" name="unitaryvalue" placeholder="Valor" />
            <Input className="InputP" name="url" placeholder="URL da imagem" />

            <Button type="submit" value="Cadastrar" />
          </Form>
    </div>
    </>
    );
}