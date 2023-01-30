import { loadSettings } from '../../../utils/storeValuesLoader';
import HomeTemplate from '../../template/Home';

const HomePage = () => {
  loadSettings();
  return (
    <>
      <HomeTemplate></HomeTemplate>
    </>
  );
};
export default HomePage;
