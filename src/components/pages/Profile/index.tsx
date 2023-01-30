import { loadSettings } from '../../../utils/storeValuesLoader';
import ProfileTemplate from '../../template/Profile';
import './styles.scss';

const ProfilePage = () => {
  loadSettings();
  return <ProfileTemplate></ProfileTemplate>;
};

export default ProfilePage;
