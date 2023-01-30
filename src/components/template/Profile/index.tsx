import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserDataApi } from '../../../api/user.api';
import { Heading1 } from '../../atoms/Heading';
import Footer from '../../organisms/Footer';
import Navbar from '../../organisms/Navbar';

const ProfileTemplate = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const isLoggedin = useSelector((state: any) => state.user.value.isLoggedin);

  const fetchData = async () => {
    const res: any = await UserDataApi();
    return res.data;
  };

  useEffect(() => {
    if (!isLoggedin) return navigate('/');
    fetchData().then((userInfo) => setUserData(userInfo));
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <Container id="content">
        <Row>
          <Col>
            <Heading1 className="text-center">Profile</Heading1>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default ProfileTemplate;
