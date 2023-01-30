import Icon from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';
import './styles.scss';

interface Props {
  title: string;
  price: number;
}

const CheckoutCard = (props: Props) => {
  return (
    <>
      <div id="checkout-card" className="border-light mb-4">
        <div className="thumb">
          <Icon src="/assets/login-banner.jpg" className="icon-2lg"></Icon>
        </div>

        <div className="info">
          <Paragraph className="fw-bold mb-0">{props.title}</Paragraph>
          <Paragraph>{'$ ' + props.price.toString(10)}</Paragraph>
        </div>
      </div>
    </>
  );
};

export default CheckoutCard;
