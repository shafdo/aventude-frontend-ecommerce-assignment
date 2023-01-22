import { Container, Row, Col, Image } from 'react-bootstrap';
import DefaultButton from '../../atoms/Button';
import { Heading1 } from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';
import './styles.scss';

const ProductTemplate = () => {
  return (
    <>
      <Navbar></Navbar>

      <Container id="content">
        <Row>
          <Col lg={6} className="my-5 product-image">
            <Image src="/assets/login-banner.jpg" fluid={true}></Image>
          </Col>

          <Col lg={6} className="product-details">
            <div className="d-block my-4">
              <Heading1 className="text-capitalize">Test product.</Heading1>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <Paragraph className="fs-3 fst-italic">$100</Paragraph>
              <DefaultButton size="sm" className="fs-6 primary-btn fst-italic pe-none">
                20 In Stock
              </DefaultButton>
            </div>

            <div className="d-block">
              <Paragraph className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet iure reiciendis fugiat quas repudiandae? Voluptatem iste placeat esse! Voluptatum aliquam praesentium, rem recusandae minus quasi error doloremque tempore ut? Dolor.</Paragraph>
              <Paragraph className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet iure reiciendis fugiat quas repudiandae? Voluptatem iste placeat esse! Voluptatum aliquam praesentium, rem recusandae minus quasi error doloremque tempore ut? Dolor.</Paragraph>
            </div>

            <div className="d-block my-5">
              <DefaultButton size="lg" className="primary-btn w-50 d-block mx-auto">
                Buy Now
              </DefaultButton>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default ProductTemplate;
