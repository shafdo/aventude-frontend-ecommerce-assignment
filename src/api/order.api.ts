import Axios from 'axios';
import Cookies from 'js-cookie';

Axios.defaults.withCredentials = true;

export const CreateOrderApi = async (productId: string, orderQty: number) => {
  const postData = {
    productId,
    orderQty
  };
  const response = Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/order`, postData);

  return response;
};

export const GetOrderApi = async (orderId: string) => {
  const response = Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/order/${orderId}`);

  return response;
};

export const GetUserOrdersApi = async () => {
  const response = Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/order`);

  return response;
};
