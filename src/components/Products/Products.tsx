import React from 'react';

import { PRODUCTS } from '../../shared/util/productMock';
import ProductsList from './ProductsList';

const Products = () => {
  return <ProductsList items={PRODUCTS} />;
};

export default Products;
