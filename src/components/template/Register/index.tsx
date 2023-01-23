import { Container, Row, Col } from 'react-bootstrap';
import DefaultButton from '../../atoms/Button';
import { InputWithLabel } from '../../atoms/Input';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../organisms/Footer';
import './styles.scss';

const RegisterTemplate = () => {
  return (
    <>
      <Container fluid={true} id="content" className="p-0">
        <Row className="w-100 h-100 m-0">
          <Col lg={6} className="px-5 d-flex align-items-center">
            <div className="my-5 w-100">
              <div className="d-block">
                <Paragraph className="display-3 text-center">Register</Paragraph>
                <Paragraph className="text-center">Use the bellow form to register</Paragraph>
              </div>

              <div className="d-block">
                <InputWithLabel label="Email Address" size="lg" type="email" className="mb-4" placeholder="example@email.com"></InputWithLabel>
                <InputWithLabel label="Password" size="lg" type="password" className="mb-4" placeholder="**********" id="password"></InputWithLabel>
                <InputWithLabel label="Confirm Password" size="lg" type="password" className="mb-4" placeholder="**********" id="confirm-password"></InputWithLabel>
              </div>

              <div className="d-block my-5">
                <DefaultButton size="lg" className="primary-outline-btn w-50 d-block mx-auto">
                  Register
                </DefaultButton>
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
