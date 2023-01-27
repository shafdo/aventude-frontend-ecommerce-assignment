import Axios from 'axios';
Axios.defaults.withCredentials = true;

export const SearchCategoryApi = (id: string) => {
  const response = Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/search/category/${id}`);
  return response;
};

export const SearchProductApi = (productName: string) => {
  const response = Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/search/${productName}`);
  return response;
};
