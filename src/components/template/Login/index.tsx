import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DefaultButtonWithIcon, SubmitButton } from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../organisms/Footer';
import ArrowBack from './arrow-left.svg';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { LoginApi } from '../../../api/user.api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { showBasicSuccessAlert, showBasicErrorAlert } from '../../../utils/swalAlerts';
import './styles.scss';

const MySwal = withReactContent(Swal);

const LoginTemplate = () => {
  let navigate = useNavigate();

  useEffect(() => {
    console.log(Cookies.get('auth'));
    if (Cookies.get('auth') !== undefined) return navigate('/');
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData: object) => {
    const { email, password }: any = formData;

    if (!email || !password) return await showBasicErrorAlert({ title: 'Error', msg: 'Please fill in all the inputs.' });

    const res: any = await LoginApi(email, password);

    if (res.status === 200) {
      return await showBasicSuccessAlert({ title: 'Logged In Successfully', msg: res.data.msg }).then(() => {
        Cookies.set('auth', res.data.token);
        return navigate('/login');
      });
    }
    return await showBasicErrorAlert({ title: 'Oops.', msg: res.data });
  };

  return (
    <>
      <Container fluid={true} id="content" className="p-0">
        <Row className="w-100 h-100 m-0">
          <Col lg={6} className="px-5 d-flex align-items-center">
            <div className="my-5 w-100">
              <div className="d-block my-4">
                <Link to="/">
                  <DefaultButtonWithIcon iconSrc={ArrowBack} size="sm" className="d-block primary-outline-btn mx-auto w-25 fw-bold">
                    Go back
                  </DefaultButtonWithIcon>
                </Link>
              </div>

              <div className="d-block">
                <Paragraph className="display-3 text-center">Login</Paragraph>
                <Paragraph className="text-center">Welcome back. Please enter your details</Paragraph>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-block">
                  <Form.Group className="mb-4" id="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="example@email.com" {...register('email')} />
                  </Form.Group>

                  <Form.Group className="mb-4" id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size="lg" type="password" placeholder="**********" {...register('password')} />
                  </Form.Group>
                </div>

                <div className="d-block my-5">
                  <SubmitButton value="Login" className="btn primary-outline-btn w-50 d-block mx-auto"></SubmitButton>
                </div>
              </form>
            </div>
          </Col>

          <Col lg={6} className="p-0 d-none d-sm-none d-md-none d-lg-block">
            <div id="bannerImage" style={{ backgroundImage: `url(/assets/login-banner.jpg)` }}></div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default LoginTemplate;
