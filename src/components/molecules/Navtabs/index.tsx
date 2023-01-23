import { Link } from 'react-router-dom';
import { Heading4 } from '../../atoms/Heading';
import ArrowDown from './arrrow-down.svg';
import Icon from '../../atoms/Icon';

const Navtabs = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap ">
      <Link to="/">
        <Heading4 className="px-4 py-2">Home</Heading4>
      </Link>

      <div className="d-flex justify-content-center px-4 py-2">
        <Heading4 className="text-center px-1">Categories</Heading4>
        <Icon src={ArrowDown} className="icon-xs"></Icon>
      </div>

      <Link to="/register">
        <Heading4 className="px-4 py-2">Register</Heading4>
      </Link>

      <Link to="/login">
        <Heading4 className="px-4 py-2">Login</Heading4>
      </Link>
    </div>
  );
};

export default Navtabs;
