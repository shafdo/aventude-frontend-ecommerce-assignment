import Axios from 'axios';

Axios.defaults.withCredentials = true;

interface userType {
  email: string;
  password: string;
  confirmPassword: string;
}

export const LoginApi = (email: userType, password: userType) => {
  const postData = {
    email,
    password
  };

  const response = Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/login`, postData, { withCredentials: true });
  return response;
};

export const RegisterApi = (email: userType, password: userType, confirmPassword: userType) => {
  const postData = {
    email,
    password,
    confirmPassword
  };

  const response = Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/register`, postData, { withCredentials: true });
  return response;
};
