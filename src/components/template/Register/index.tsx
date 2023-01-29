import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { DefaultButtonWithIcon, SubmitButton } from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../organisms/Footer';
import ArrowBack from './arrow-left.svg';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { RegisterApi } from '../../../api/user.api';
import Cookies from 'js-cookie';
import { showBasicSuccessAlert, showBasicErrorAlert } from '../../../utils/swalAlerts';
import './styles.scss';

const RegisterTemplate = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('auth') !== undefined) return navigate('/');
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData: object) => {
    const { email, password, cpassword }: any = formData;

    if (!email || !password || !cpassword) return await showBasicErrorAlert({ title: 'Error', msg: 'Please fill in all the inputs.' });

    if (password !== cpassword) return await showBasicErrorAlert({ title: 'Error', msg: 'Password did not match confirm password.' });

    const res: any = await RegisterApi(email, password);

    if (res.status === 200) return await showBasicSuccessAlert({ title: 'Success', msg: res.data }).then(() => navigate('/login'));
    return await showBasicErrorAlert({ title: 'Error', msg: res.data });
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
                <Paragraph className="display-3 text-center">Register</Paragraph>
                <Paragraph className="text-center">Use the bellow form to register</Paragraph>
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

                  <Form.Group className="mb-4" id="cpassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control size="lg" type="password" placeholder="**********" {...register('cpassword')} />
                  </Form.Group>
                </div>
                <div className="d-block my-5">
                  <SubmitButton value="Register" className="btn primary-outline-btn w-50 d-block mx-auto"></SubmitButton>
                </div>
              </form>
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
