import _ from 'lodash';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetUserOrdersApi } from '../../../api/order.api';
import { UserDataApi } from '../../../api/user.api';
import { DefaultButton } from '../../atoms/Button';
import { Heading1, Heading2, Heading3 } from '../../atoms/Heading';
import Hr from '../../atoms/Hr';
import { InputWithLabel } from '../../atoms/Input';
import Paragraph from '../../atoms/Paragraph';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';
import './styles.scss';

const ProfileTemplate = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData]: any = useState({});
  const [userData, setUserData] = useState({
    data: {
      userId: '',
      email: '',
      userOrders: '{}'
    },
    status: 0
  });
  const [isLoggedin, setIsLoggedin] = useState(useSelector((state: any) => state.user.value.isLoggedin));

  const fetchUserData = async () => {
    const res: any = await UserDataApi().catch((error) => {
      return error.response;
    });
    return res;
  };

  const fetchOrderData = async () => {
    const res: any = await GetUserOrdersApi().catch((error) => {
      return error.response;
    });
    return res;
  };

  useEffect(() => {
    if (!isLoggedin) return navigate('/');
    fetchUserData().then((userInfo) => setUserData(userInfo));
  }, [userData]);

  useEffect(() => {
    fetchOrderData().then((orderInfo) => setOrderData(orderInfo));
    console.log(orderData);
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <Container id="content">
        <Row>
          <Col xs={12} className="mb-4">
            <Heading1 className="text-center">Profile</Heading1>
          </Col>
          <Col lg={6}>
            <InputWithLabel type="text" size="lg" label="User Identifier" value={userData.data.userId} isDisabled={true}></InputWithLabel>
          </Col>
          <Col lg={6}>
            <InputWithLabel type="text" size="lg" label="Email" value={userData.data.email} isDisabled={true}></InputWithLabel>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Heading2 className="my-5">Orders:</Heading2>
          </Col>
        </Row>

        <Row id="orders-container">
          {!_.isEmpty(orderData)
            ? orderData.data.map((res: any, index: number) => {
                return (
                  <Col lg={6} className="col-wrapper">
                    <div className="card mb-5">
                      <Heading3 className="card-title my-2">{res.product.productName}</Heading3>
                      <Hr className="mb-4" />
                      <div className="d-block mt-2 mb-4">
                        <Paragraph className="my-1">{'Date: ' + new Date(res.order.orderDate).toLocaleDateString('en-GB')}</Paragraph>
                        <Paragraph className="my-1">{'Qty: ' + res.order.orderQty}</Paragraph>
                      </div>
                      <DefaultButton size="sm" className="fs-6 primary-btn fst-italic pe-none w-50 d-block mx-auto">
                        Status: {res.order.orderStatus}
                      </DefaultButton>
                    </div>
                  </Col>
                );
              })
            : ''}

          {/* <Col lg={6} className="col-wrapper">
            <div className="card">
              <Heading3 className="card-title my-2">Test</Heading3>
              <Hr className="mb-4" />
              <div className="d-block mt-2 mb-4">
                <Paragraph className="my-1">Date: 2023-06-12</Paragraph>
                <Paragraph className="my-1">Qty: 4</Paragraph>
              </div>
              <DefaultButton size="sm" className="fs-6 primary-btn fst-italic pe-none w-50 d-block mx-auto">
                Status: Processing
              </DefaultButton>
            </div>
          </Col> */}
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default ProfileTemplate;
