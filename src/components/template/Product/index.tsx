import { Container, Row, Col, Image } from 'react-bootstrap';
import { DefaultButton } from '../../atoms/Button';
import { Heading1 } from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './styles.scss';
import { GetProductApi } from '../../../api/product.api';
import { Link } from 'react-router-dom';

const ProductTemplate = () => {
  const { id }: any = useParams<string>();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await GetProductApi(id);
      return res.data;
    };

    fetchData().then((prod) => setProduct(prod));
  }, []);

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
              <Heading1 className="text-capitalize">{product.productName}</Heading1>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <Paragraph className="fs-3 fst-italic">{'$ ' + product.productPrice}</Paragraph>
              <DefaultButton size="sm" className="fs-6 primary-btn fst-italic pe-none">
                {product.productStock} In Stock
              </DefaultButton>
            </div>

            <div className="d-block">
              <Paragraph className="my-4">{product.productDesc}</Paragraph>
            </div>

            <div className="d-block my-5">
              <Link to={`/checkout/${product.productId}`}>
                <DefaultButton size="lg" className="primary-btn w-50 d-block mx-auto">
                  Buy Now
                </DefaultButton>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default ProductTemplate;
