import { Image, ImageProps } from 'react-bootstrap';
import { Heading4 } from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import './styles.scss';
import StockIcon from './stock.svg';
import SearchIcon from './search.svg';
import Icon from '../../atoms/Icon';

interface Props extends ImageProps {
  src: string;
  productName: string;
  productCategory: string;
  productPrice: number;
  productStock: number;
}

const ProductCard = (props: Props) => {
  return (
    <>
      <div className="card d-block mx-auto mb-5">
        <div className="card-thumb">
          <Image src={props.src} fluid={true}></Image>
        </div>
        <div className="card-body">
          <Heading4 className="mb-3 text-capitalize">product Title</Heading4>
          <Paragraph className="category">Cloths</Paragraph>
          <div className="d-flex justify-content-between align-items-center">
            <Paragraph className="price mb-0">$100</Paragraph>

            <div className="d-flex justify-content-center align-items-center">
              <Icon src={StockIcon} className="icon-xs"></Icon>
              <Paragraph className="stock mb-0 mx-2">20</Paragraph>
            </div>

            <div className="search-icon-wrapper">
              <Icon src={SearchIcon} className="search-icon icon-light icon-2xs"></Icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
