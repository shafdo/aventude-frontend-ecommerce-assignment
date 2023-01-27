import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchCategoryApi, SearchProductApi } from '../../../api/search.api';
import ProductsContainer from '../../organisms/Products';

export const SearchCategoryTemplate = () => {
  const { id }: any = useParams<string>();
  const [categories, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await SearchCategoryApi(id);
      return res.data;
    };

    fetchData().then((cats) => setProducts(cats));
  }, []);

  return <ProductsContainer title="Category Search" itterList={categories}></ProductsContainer>;
};

export const SearchProductNameTemplate = () => {
  const { productName }: any = useParams<string>();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await SearchProductApi(productName);
      return res.data;
    };

    fetchData().then((prods) => setProducts(prods));
  }, []);

  console.log(products);

  return <ProductsContainer title="Product Search" itterList={products}></ProductsContainer>;
};
