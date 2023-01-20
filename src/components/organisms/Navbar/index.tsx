import StoreLogo from '../../atoms/Logo';
import GroupInput from '../../molecules/InputGroup';
import Navtabs from '../../molecules/Navtabs';
import searchIcon from './search.svg';
import './styles.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      <StoreLogo className="logo-md d-block mx-auto"></StoreLogo>
      <Navtabs></Navtabs>
      <div className="d-flex justify-content-center flex-wrap w-100">
        <GroupInput className="my-4 w-25" iconSrc={searchIcon}></GroupInput>
      </div>
    </div>
  );
};

export default Navbar;
