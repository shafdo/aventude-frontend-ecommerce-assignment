import { Link } from 'react-router-dom';
import { Heading4 } from '../../atoms/Heading';
import ArrowDown from './arrrow-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../atoms/Icon';
import { logout } from '../../../store';

const Navtabs = () => {
  const email = useSelector((state: any) => state.user.value.email);

  const dispatch = useDispatch();

  const logoutSession = () => {
    dispatch(logout());
  };

  return (
    <div className="d-flex justify-content-center flex-wrap ">
      <Link to="/">
        <Heading4 className="px-4 py-2">Home</Heading4>
      </Link>

      <div className="d-flex justify-content-center px-4 py-2">
        <Heading4 className="text-center px-1">Categories</Heading4>
        <Icon src={ArrowDown} className="icon-xs"></Icon>
      </div>

      {email ? (
        <Link to="/profile">
          <Heading4 className="px-4 py-2">Profile</Heading4>
        </Link>
      ) : (
        <Link to="/register">
          <Heading4 className="px-4 py-2">Register</Heading4>
        </Link>
      )}

      {email ? (
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
