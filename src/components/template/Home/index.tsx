import { useEffect, useState } from 'react';

import { GetProductsApi } from '../../../api/product.api';
import ProductsContainer from '../../organisms/Products';

const HomeTemplate = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await GetProductsApi();
      return res.data;
    };

    fetchData().then((prods) => setProducts(prods));
  }, []);

  console.log(products);

  return <ProductsContainer title="Product Catalog" itterList={products}></ProductsContainer>;
};

export default HomeTemplate;
