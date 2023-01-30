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

  const response = Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/login`, postData);
  return response;
};

export const RegisterApi = (email: userType, password: userType) => {
  const postData = {
    email,
    password
  };

  const response = Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user/register`, postData);
  return response;
};

export const UserDataApi = () => {
  const response = Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/user`);
  return response;
};
