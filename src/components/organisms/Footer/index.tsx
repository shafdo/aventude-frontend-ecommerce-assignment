import Hr from '../../atoms/Hr';
import StoreLogo from '../../atoms/Logo';
import Footertabs from '../../molecules/Footertabs';
import CopyrightIcon from './copyright.svg';
import Icon from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';

const Footer = () => {
  return (
    <div id="footer">
      <Hr className="m-0 dark"></Hr>
      <div className="tabs d-flex justify-content-between align-items-center">
        <StoreLogo className="logo-sm"></StoreLogo>
        <Footertabs></Footertabs>
      </div>
      <Hr className="m-0 dark"></Hr>
      <div className="copyright d-flex justify-content-center align-items-center w-100 py-2">
        <Icon src={CopyrightIcon} className="icon-sm mx-1"></Icon>
        <Paragraph className="mb-0 ml-4">Copyright 2022 - 2023. Shalinda's Ecommerce Store.</Paragraph>
      </div>
    </div>
  );
};

export default Footer;
