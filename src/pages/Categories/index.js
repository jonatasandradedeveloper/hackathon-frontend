import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Card from "../../components/Card";
import { toast } from "react-toastify";

import "./styles.js";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  console.log(categories)
  useEffect(() => {
    api.get("categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  async function handDeleteCategory(id) {
    try {
      await api.delete(`categories/${id}`);
      setCategories(categories.filter((category) => category.id !== id));
      toast.success("Categoria deletado com sucesso.");
    } catch {
      toast.error("Erro ao deletar categoria, esta categoria possui produtos.");
    }
  }

  return (
    <>
      <div>
        {categories.map((category) => 
        
        <Card 
        name={category.name} 
        description={category.description} 
        id={category.id}
        onClick={() => handDeleteCategory(category.id)}
        />
        
        )}
      </div>

    </>
  );
}