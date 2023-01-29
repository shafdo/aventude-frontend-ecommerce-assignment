import { loadSettings } from '../../../utils/storeValuesLoader';
import LoginTemplate from '../../template/Login';

const LoginPage = () => {
  loadSettings();
  return (
    <>
      <LoginTemplate></LoginTemplate>
    </>
  );
};

export default LoginPage;
