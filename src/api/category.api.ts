import Axios from 'axios';
Axios.defaults.withCredentials = true;

export const GetCategoriesApi = () => {
  const response = Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/category`);
  return response;
};
