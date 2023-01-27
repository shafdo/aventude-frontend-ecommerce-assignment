import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GetProductsApi } from '../../../api/product.api';
import { Heading1 } from '../../atoms/Heading';
import ProductCard from '../../molecules/ProductCard';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';

const HomeTemplate = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await GetProductsApi();
      return res.data;
    };

    fetchData().then((prods) => setProducts(prods));
  }, []);

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
          {products.slice(0, products.length).map((product: any) => {
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

export default HomeTemplate;
