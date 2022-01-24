import { createContext } from 'react';

export const ProductsContext = createContext({
    products:  [] as any,
    productsAdded: (p: object) => {},
  });
