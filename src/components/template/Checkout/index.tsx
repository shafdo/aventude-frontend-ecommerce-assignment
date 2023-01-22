import { Container, Row, Col } from 'react-bootstrap';
import DefaultButton from '../../atoms/Button';
import { Heading2, Heading4 } from '../../atoms/Heading';
import Hr from '../../atoms/Hr';
import { InputWithLabel } from '../../atoms/Input';
import Paragraph from '../../atoms/Paragraph';
import CheckoutCard from '../../molecules/CheckoutCard';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';
import './styles.scss';

const CheckoutTemplate = () => {
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
              <CheckoutCard></CheckoutCard>
              <Hr className="dark" />
            </div>

            <div className="d-flex justify-content-between">
              <Paragraph>Sub Total</Paragraph>
              <Paragraph className="subtotal">$100</Paragraph>
            </div>

            <div className="d-flex justify-content-between">
              <Paragraph>Shipping</Paragraph>
              <Paragraph className="subtotal">$10</Paragraph>
            </div>

            <div className="d-block">
              <Hr className="dark" />
            </div>

            <div className="d-flex justify-content-between">
              <Paragraph>Total</Paragraph>
              <Heading4 className="total">$110</Heading4>
            </div>

            <div className="d-block my-4">
              <DefaultButton className="primary-btn w-50 d-block mx-auto">Pay Now</DefaultButton>
            </div>
          </Col>

          <Col className="payment-details" xs={12} lg={6}>
            <Heading2 className="mb-4">Payment Details</Heading2>

            <div className="d-block">
              <InputWithLabel id="customer-email" type="email" size="lg" label="Email" value="example@email.com" isDisabled={true}></InputWithLabel>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default CheckoutTemplate;
