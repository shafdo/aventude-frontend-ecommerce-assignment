import Icon from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';
import './styles.scss';

const CheckoutCard = () => {
  return (
    <>
      <div id="checkout-card" className="border-light mb-4">
        <div className="thumb">
          <Icon src="/assets/login-banner.jpg" className="icon-2lg"></Icon>
        </div>

        <div className="info">
          <Paragraph className="fw-bold mb-0">Product Title</Paragraph>
          <Paragraph>$100</Paragraph>
        </div>
      </div>
    </>
  );
};

export default CheckoutCard;
