import Axios from 'axios';
import Cookies from 'js-cookie';

Axios.defaults.withCredentials = true;

export const CreateOrderApi = async (productId: string, orderQty: number) => {
  // let cookie = cookieClient.load('cookie-name')
  let cookie = Cookies.get('auth');
  console.log(cookie);

  const postData = {
    productId,
    orderQty
  };
  // const response = Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/order`, postData);
  const response = Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/order`, postData, { withCredentials: true });

  return response;
};
