import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { SearchCategoryApi, SearchProductApi } from '../../../api/search.api';
import ProductsContainer from '../../organisms/Products';
import './styles.scss';

export const SearchCategoryTemplate = () => {
  const { id }: any = useParams<string>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  const catName = searchParams.get('catName');

  const pageTitle = `Category Search ${catName}`;

  useEffect(() => {
    if (catName === undefined) return navigate('/');

    const fetchData = async () => {
      const res: any = await SearchCategoryApi(id);
      return res.data;
    };

    fetchData().then((cats) => setCategories(cats));
  }, [catName]);

  return <ProductsContainer title={pageTitle} itterList={categories}></ProductsContainer>;
};

export const SearchProductNameTemplate = () => {
  const { productName }: any = useParams<string>();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(res.data);
      // const res: any = await SearchProductApi(productName);

      const res: any = await SearchProductApi(productName).catch((error) => {
        return error.response;
      });

      if (res.status !== 200) return [];
      return res.data;
    };

    fetchData().then((prods) => setProducts(prods));
  }, []);

  return <ProductsContainer title="Product Search" itterList={products}></ProductsContainer>;
};
