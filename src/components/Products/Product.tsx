import React, { useState } from 'react';
import Button from '../../shared/components/FormElements/Button';

import Avatar from '../../shared/components/UIElements/Avatar';
import './Product.css';

interface Props {
  id: number;
  image: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
}

const Product = ({ id, image, name, price, currency, quantity }: Props) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handlePlusClick = () => {
    setItemQuantity(itemQuantity + 1);
  };
  const handleMinusClick = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };
  return (
    <li className='product-item'>
      <div className='product-item__image'>
        <Avatar image={image} alt={name} width={300} height={200} />
      </div>
      <div className='product-item__info'>
        <div className='product-item__name'>
          <h2>{name}</h2>
        </div>
        <div className='product-item__price'>
          Price: {price}
          {currency}
        </div>
        <div className='product-item__quantity'>
          Quantity: {itemQuantity} <Button onClick={handlePlusClick}>+</Button>
          <Button onClick={handleMinusClick}>-</Button>
        </div>
      </div>
    </li>
  );
};

export default Product;
