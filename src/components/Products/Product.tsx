import React, { useState, useContext, useEffect } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Avatar from '../../shared/components/UIElements/Avatar';

import { ProductsContext } from '../../context/products-context';
import { LanguageContext } from '../../context/language-context';

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
  const { products, productsAdded } = useContext(ProductsContext);
  const { language } = useContext(LanguageContext);

  const [itemQuantity, setItemQuantity] = useState(quantity);

  useEffect(() => {
    const copyArray = [...products];
    const productIndex = copyArray.findIndex((prod: any) => prod.id == id);
    if (itemQuantity) {
      if (productIndex >= 0) {
        copyArray[productIndex].quantity = itemQuantity;
        productsAdded(copyArray);
      } else {
        const newProducts = [
          ...products,
          { id, image, name, price, currency, quantity: itemQuantity },
        ];
        productsAdded(newProducts);
      }
    }
  }, [itemQuantity]);

  const handlePlusClick = () => {
    setItemQuantity(itemQuantity + 1);
  };
  const handleMinusClick = () => {
    if (itemQuantity === 1) {
      const copyArray = [...products];
      const productIndex = copyArray.findIndex((prod: any) => prod.id == id);
      copyArray.splice(productIndex, 1);
      productsAdded(copyArray);
    }
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
