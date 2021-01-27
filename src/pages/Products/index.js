import React, { useState, useEffect } from "react";
import api from "../../services/api";
import CardProduct from "../../components/CardProduct";
import { useParams, Link } from "react-router-dom";


import "./styles.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    api.get(`categories/${id}`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <div>
      <br/>
      <Link className="Link" to="/product">Adicionar Produto</Link>

        {products.map((product) => 
        <CardProduct
        name={product.name} 
        description={product.description} 
        url={product.url}
        unit={product.unid}
        code={product.code}
        unitaryvalue={product.unitaryvalue}
        />
        
        )}
      </div>

    </>
  );
}