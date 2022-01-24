import React, { useContext } from 'react';

import ProductsList from '../Products/ProductsList';

import { ProductsContext } from '../../context/products-context';

const Basket = () => {
  const { products } = useContext(ProductsContext);

  return <ProductsList items={products} className={'basket-list'} />;
};

export default Basket;
