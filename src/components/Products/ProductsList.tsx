import React, { useContext } from 'react';

import Product from './Product';
import Card from '../../shared/components/UIElements/Card';
import { PRODUCTS } from '../../shared/util/copy';
import { LanguageContext } from '../../context/language-context';

import './ProductsList.css';

interface Props {
  items: Array<object>;
  className: string;
}

const UsersList = ({ items, className }: Props) => {
  const { language } = useContext(LanguageContext);

  if (items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2> {PRODUCTS.NO_PRODUCTS[language]}</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={className}>
      {items.map((product: any) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          currency={product.currency}
          quantity={product.quantity}
        />
      ))}
    </ul>
  );
};

export default UsersList;
