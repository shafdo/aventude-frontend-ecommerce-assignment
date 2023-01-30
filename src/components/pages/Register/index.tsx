import { loadSettings } from '../../../utils/storeValuesLoader';
import RegisterTemplate from '../../template/Register';

const RegisterPage = () => {
  loadSettings();
  return (
    <>
      <RegisterTemplate></RegisterTemplate>
    </>
  );
};

export default RegisterPage;
