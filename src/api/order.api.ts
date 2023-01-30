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
