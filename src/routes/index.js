import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import AddCategory from '../pages/AddCategory';
import Categories from '../pages/Categories';

import Products from '../pages/Products';
import AddProduct from '../pages/AddProduct';

const Routes = () => (
    <Switch>      
      <Route path="/" exact component={AddCategory} />
      <Route path="/categories" component={Categories} />

      <Route path="/product" component={AddProduct} />
      <Route path="/products/categoria/:id" component={Products} />
    </Switch>
);

export default Routes;