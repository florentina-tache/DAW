import React from 'react';

import Product from './Product';
import Card from '../../shared/components/UIElements/Card';
import './ProductsList.css';

interface Props {
  items: Array<object>;
  className: string;
}

const UsersList = ({ items, className }: Props) => {
  if (items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No products found.</h2>
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
