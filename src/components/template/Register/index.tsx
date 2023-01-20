import { Container, Row, Col } from 'react-bootstrap';
import { InputWithLabel } from '../../atoms/Input';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';
import './styles.scss';

const RegisterTemplate = () => {
  return (
    <>
      <Navbar></Navbar>

      <Container fluid={true} id="content" className="p-0">
        <Row className="w-100 h-100 m-0">
          <Col lg={6} className="px-5 d-flex align-items-center">
            <div className="my-5 w-100">
              <div className="d-block">
                <Paragraph className="display-3 text-center">Welcome</Paragraph>
                <Paragraph className="text-center">Use the bellow form to register</Paragraph>
              </div>
              <div className="d-block">
                <InputWithLabel label="Email Address" size="lg" type="email" className="mb-4" placeholder="example@email.com"></InputWithLabel>
                <InputWithLabel label="Password" size="lg" type="password" className="mb-4" placeholder="**********"></InputWithLabel>
              </div>
            </div>
          </Col>
          <Col lg={6} className="p-0 d-none d-sm-none d-md-none d-lg-block">
            <div id="bannerImage" style={{ backgroundImage: `url(/assets/register-banner.jpg)` }}></div>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default RegisterTemplate;
