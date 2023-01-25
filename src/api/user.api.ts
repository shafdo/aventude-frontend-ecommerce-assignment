import Axios from 'axios';

Axios.defaults.withCredentials = true;

interface userType {
  email: string;
  password: string;
  confirmPassword: string;
}

export const LoginApi = async (email: userType, password: userType) => {
  const postData = {
    email,
    password
  };

  return new Promise((resolve) => {
    Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/login`, postData, { withCredentials: true })
      .then((res) => resolve(res))
      .catch((error) => resolve(error.response));
  });
};

export const RegisterApi = (email: userType, password: userType, confirmPassword: userType) => {
  const postData = {
    email,
    password,
    confirmPassword
  };

  return new Promise((resolve) => {
    Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/register`, postData, { withCredentials: true })
      .then((res) => resolve(res))
      .catch((error) => resolve(error.response));
  });
};
