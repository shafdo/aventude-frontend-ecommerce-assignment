import { useEffect, useState } from 'react';
import { GetCategoriesApi } from '../../../api/category.api';
import StoreLogo from '../../atoms/Logo';
import GroupInput from '../../molecules/InputGroup';
import Navtabs from '../../molecules/Navtabs';
import searchIcon from './search.svg';
import './styles.scss';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await GetCategoriesApi();
      let data: any = [];
      res.data.forEach((e: any) => {
        data.push({
          productCategoryName: e.productCategoryName,
          productCategoryId: e.productCategoryId
        });
      });
      return data;
    };

    fetchData().then((cats) => setCategories(cats));
  }, []);

  return (
    <div id="navbar">
      <StoreLogo className="logo-md d-block mx-auto"></StoreLogo>
      <Navtabs categoryList={categories}></Navtabs>
      <div className="d-flex justify-content-center flex-wrap w-100">
        <GroupInput className="my-4 w-25" iconSrc={searchIcon}></GroupInput>
      </div>
    </div>
  );
};

export default Navbar;
