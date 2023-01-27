import Axios from 'axios';
Axios.defaults.withCredentials = true;

export const GetProductsApi = () => {
  const response = Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product`);
  return response;
};

export const GetProductApi = (id: string) => {
  const response = Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product/${id}`);
  return response;
};
