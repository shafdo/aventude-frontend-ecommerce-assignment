import { FormEventHandler, useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
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
import { SearchProductApi } from '../../../api/search.api';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const search = async (e: any) => {
    e.preventDefault();
    return navigate(`/search/product/${searchTerm}`);
  };

  return (
    <div id="navbar">
      <StoreLogo className="logo-md d-block mx-auto"></StoreLogo>
      <Navtabs categoryList={categories}></Navtabs>
      <div className="d-flex justify-content-center flex-wrap w-100">
        <form onSubmit={search}>
          <InputGroup className="my-4">
            <InputGroup.Text>
              <Icon src={searchIcon} className="icon-xs"></Icon>
            </InputGroup.Text>
            {/* <Input type="text" size="lg" className="no-left-border" placeholder="Search" onChange={ (event: React.ChangeEvent<HTMLInputElement>) => { return setSearchTerm(event.target.value); } } /> */}
            <input placeholder="Search" type="text" className="no-left-border form-control form-control-lg" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}></input>
          </InputGroup>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
