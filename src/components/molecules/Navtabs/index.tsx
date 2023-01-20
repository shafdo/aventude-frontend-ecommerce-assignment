import { Heading4 } from '../../atoms/Heading';
import ArrowDown from './arrrow-down.svg';
import Icon from '../../atoms/Icon';

const Navtabs = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap ">
      <Heading4 className="px-4 py-2">Home</Heading4>
      <div className="d-flex justify-content-center px-4 py-2">
        <Heading4 className="text-center px-1">Categories</Heading4>
        <Icon src={ArrowDown} className="icon-xs"></Icon>
      </div>
      <Heading4 className="px-4 py-2">Contact</Heading4>
      <Heading4 className="px-4 py-2">About</Heading4>
    </div>
  );
};

export default Navtabs;
