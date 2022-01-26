import React, { useContext } from 'react';

import ProductsList from '../Products/ProductsList';

import { ProductsContext } from '../../context/products-context';
import { LanguageContext } from '../../context/language-context';

import { PRODUCTS } from '../../shared/util/copy';
import './Basket.css';

const Basket = () => {
  const { products, total } = useContext(ProductsContext);
  const { language } = useContext(LanguageContext);

  return (
    <>
      <ProductsList items={products} className={'basket-list'} />
      <div className={'total-price'}>
        {PRODUCTS.TOTAL_PRICE[language]} {total}
      </div>
    </>
  );
};

export default Basket;
