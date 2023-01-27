import { Container, Row, Col } from 'react-bootstrap';
import { Type } from 'typescript';
import { Heading1 } from '../../atoms/Heading';
import ProductCard from '../../molecules/ProductCard';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';

interface Props {
  itterList: Array<Type>;
  title: string;
}

const ProductsContainer = (props: Props) => {
  return (
    <>
      <Navbar></Navbar>
      <Container className="my-5">
        <Row>
          <Col>
            <Heading1 className="text-center mb-5">{props.title}</Heading1>
          </Col>
        </Row>
        <Row>
          {props.itterList.slice(0, props.itterList.length).map((product: any) => {
            return (
              <Col md={6} lg={6} xl={4}>
                <ProductCard src="https://source.unsplash.com/random/?friuts&2" productId={product.productId} productName={product.productName} productCategory="Clothing" productPrice={100} productStock={product.productStock}></ProductCard>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ProductsContainer;
