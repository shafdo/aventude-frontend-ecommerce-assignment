import Axios from 'axios';
Axios.defaults.withCredentials = true;

export const GetProductsApi = () => {
  return new Promise((resolve) => {
    Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product`)
      .then((res) => resolve(res))
      .catch((error) => resolve(error.response));
  });
};

export const GetProductApi = (id: string) => {
  return new Promise((resolve) => {
    Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/product/${id}`)
      .then((res) => resolve(res))
      .catch((error) => resolve(error.response));
  });
};
