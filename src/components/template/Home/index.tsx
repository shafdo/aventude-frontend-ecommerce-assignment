import { Container, Row, Col } from 'react-bootstrap';
import { Heading1 } from '../../atoms/Heading';
import ProductCard from '../../molecules/ProductCard';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';

const HomeTemplate = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container className="my-5">
        <Row>
          <Col>
            <Heading1 className="text-center mb-5">Product Catalog</Heading1>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={6} xl={4}>
            <ProductCard src="https://source.unsplash.com/random/?clothes&1"></ProductCard>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <ProductCard src="https://source.unsplash.com/random/?clothes&2"></ProductCard>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <ProductCard src="https://source.unsplash.com/random/?clothes&3"></ProductCard>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <ProductCard src="https://source.unsplash.com/random/?clothes&4"></ProductCard>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <ProductCard src="https://source.unsplash.com/random/?clothes&5"></ProductCard>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <ProductCard src="https://source.unsplash.com/random/?clothes&6"></ProductCard>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default HomeTemplate;
