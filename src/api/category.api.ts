import Axios from 'axios';
Axios.defaults.withCredentials = true;

export const GetCategoriesApi = () => {
  return new Promise((resolve) => {
    Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/category`)
      .then((res) => resolve(res))
      .catch((error) => resolve(error.response));
  });
};
