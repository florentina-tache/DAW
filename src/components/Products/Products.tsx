import React from 'react';

import { PRODUCTS } from '../../shared/util/productMock';
import ProductsList from './ProductsList';

//import { useHttpClient } from '../../shared/hooks/http-hook';

const Products = () => {
  //  const [loadedProducts, setLoadedProducts] = useState();
  // const {sendRequest } = useHttpClient();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         'http://localhost:5000/api/products'
  //       );

  //       setLoadedUsers(responseData.products);
  //     } catch (err) {}
  //   };
  //   fetchProducts();
  // }, [sendRequest]);

  return <ProductsList items={PRODUCTS} className={'products-list'} />;
};

export default Products;
