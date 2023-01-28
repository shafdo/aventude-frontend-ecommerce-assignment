import { useEffect, useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { GetCategoriesApi } from '../../../api/category.api';
import { saveUserData } from '../../../store';
import Icon from '../../atoms/Icon';
import { Input } from '../../atoms/Input';
import StoreLogo from '../../atoms/Logo';
import Navtabs from '../../molecules/Navtabs';
import searchIcon from './search.svg';
import _ from 'lodash';
import './styles.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

    // Set redux state variables from localstorage
    const savedSettings = JSON.parse(localStorage.getItem('settings') || '{}');
    if (_.isEmpty(savedSettings)) return;

    dispatch(saveUserData(savedSettings));
  }, []);

  const search = () => {
    console.log('Change detect');
  };

  return (
    <div id="navbar">
      <StoreLogo className="logo-md d-block mx-auto"></StoreLogo>
      <Navtabs categoryList={categories}></Navtabs>
      <div className="d-flex justify-content-center flex-wrap w-100">
        <InputGroup className="my-4 w-25">
          <InputGroup.Text>
            <Icon src={searchIcon} className="icon-xs"></Icon>
          </InputGroup.Text>
          <Input type="text" size="lg" className="no-left-border" placeholder="Search" />
        </InputGroup>
      </div>
    </div>
  );
};

export default Navbar;
