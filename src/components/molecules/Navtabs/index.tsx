import { Link } from 'react-router-dom';
import { Heading4 } from '../../atoms/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { eraseUserData } from '../../../store';
import { Dropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import _ from 'lodash';

interface Props {
  categoryList: any;
}

const Navtabs = (props: Props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(useSelector((state: any) => state.user.value.isLoggedin));

  const categoryList = props.categoryList;
  const categoryCount = props.categoryList.length;

  const dispatch = useDispatch();

  const logoutSession = () => {
    Cookies.remove('auth');
    dispatch(eraseUserData());

    // Update localstorage
    const savedSettings = JSON.parse(localStorage.getItem('settings') || '{}');
    if (!_.isEmpty(savedSettings)) {
      savedSettings.isLoggedin = false;
      savedSettings.email = '';
    }
    localStorage.setItem('settings', JSON.stringify(savedSettings));
  };

  return (
    <div className="d-flex justify-content-center flex-wrap ">
      <Link to="/">
        <Heading4 className="px-4 py-2">Home</Heading4>
      </Link>

      <div className="d-flex justify-content-center px-4 py-2">
        <Dropdown>
          <Dropdown.Toggle variant="none" id="category-dropdown">
            <Heading4 className="text-center px-1">Categories</Heading4>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categoryList.slice(0, categoryCount).map((category: any) => {
              return (
                <Dropdown.Item as={Link} to={`/search/category/${category.productCategoryId}?catName=${category.productCategoryName}`}>
                  {category.productCategoryName}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {isUserLoggedIn ? (
        <Link to="/profile">
          <Heading4 className="px-4 py-2">Profile</Heading4>
        </Link>
      ) : (
        <Link to="/register">
          <Heading4 className="px-4 py-2">Register</Heading4>
        </Link>
      )}

      {isUserLoggedIn ? (
        <Link onClick={logoutSession} to="/login">
          <Heading4 className="px-4 py-2">Logout</Heading4>
        </Link>
      ) : (
        <Link to="/login">
          <Heading4 className="px-4 py-2">Login</Heading4>
        </Link>
      )}
    </div>
  );
};

export default Navtabs;
