import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CreateOrderApi } from '../../../api/order.api';
import { GetProductApi } from '../../../api/product.api';
import { showBasicErrorAlert, showBasicSuccessAlert } from '../../../utils/swalAlerts';
import { DefaultButton } from '../../atoms/Button';
import { Heading2, Heading4 } from '../../atoms/Heading';
import Hr from '../../atoms/Hr';
import { InputWithLabel } from '../../atoms/Input';
import Paragraph from '../../atoms/Paragraph';
import CheckoutCard from '../../molecules/CheckoutCard';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';
import './styles.scss';

interface productType {
  data: object;
  status: number;
}

const CheckoutTemplate = () => {
  const { email, isLoggedin } = useSelector((state: any) => state.user.value);
  const navigate = useNavigate();
  const { prodId }: any = useParams<string>();
  const [product, setProduct] = useState({
    data: {
      productName: '',
      productPrice: 1
    },
    status: 200
  });
  const [qty, setQty] = useState<number>(1);

  const fetchData = async () => {
    const res: any = await GetProductApi(prodId).catch((error) => {
      return navigate('/');
    });

    return setProduct(res);
  };

  const decQty = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
  };

  useEffect(() => {
    // Error Checks
    if (!isLoggedin) {
      showBasicErrorAlert({ title: 'Error', msg: 'Please login to checkout with a product.' }).then(() => {
        return navigate('/');
      });
      return;
    }
    fetchData();
  }, []);

  const makeOrder = async () => {
    const res: any = await CreateOrderApi(prodId, qty).catch((error) => {
      return error.response;
    });

    if (res.status !== 200) return showBasicErrorAlert({ title: 'Error', msg: res.data });

    return showBasicSuccessAlert({ title: 'Order Completed', msg: res.data.msg });
  };

  return (
    <>
      <Navbar></Navbar>

      <Container id="content" className="my-5">
        <Row>
          <Col className="order-details" xs={12} lg={6}>
            <div className="d-block mb-4">
              <Heading2 className="mb-4">Order Summary</Heading2>
              <Paragraph className="mb-4">Here is a summary of the order product</Paragraph>
            </div>

            <div className="d-block">
              <CheckoutCard title={product.data.productName} price={product.data.productPrice}></CheckoutCard>

              <div className="d-flex justify-content-center align-items-center">
                <DefaultButton className="primary-outline-btn d-block" onClick={decQty}>
                  -
                </DefaultButton>
                <Heading4 className="m-0 mx-3">{qty.toString(10)}</Heading4>
                <DefaultButton className="primary-outline-btn d-block" onClick={() => setQty(qty + 1)}>
                  +
                </DefaultButton>
              </div>

              <Hr className="dark" />
            </div>

            <div className="d-flex justify-content-between">
              <Paragraph>Sub Total</Paragraph>
              <Paragraph className="subtotal">{'$' + product.data.productPrice.toString()}</Paragraph>
            </div>

            <div className="d-flex justify-content-between">
              <Paragraph>Shipping</Paragraph>
              <Paragraph className="subtotal">$0</Paragraph>
            </div>

            <div className="d-block">
              <Hr className="dark" />
            </div>

            <div className="d-flex justify-content-between">
              <Paragraph>Total</Paragraph>
              <Heading4 className="total">{'$' + product.data.productPrice.toString()}</Heading4>
            </div>

            <div className="d-block my-4">
              <DefaultButton className="primary-btn w-50 d-block mx-auto" onClick={makeOrder}>
                Pay Now
              </DefaultButton>
            </div>
          </Col>

          <Col className="payment-details" xs={12} lg={6}>
            <Heading2 className="mb-4">Payment Details</Heading2>

            <div className="d-block">
              <InputWithLabel id="customer-email" type="email" size="lg" label="Email" value={email} isDisabled={true}></InputWithLabel>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default CheckoutTemplate;
