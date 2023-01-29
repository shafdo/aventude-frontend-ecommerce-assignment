import { loadSettings } from '../../../utils/storeValuesLoader';
import CheckoutTemplate from '../../template/Checkout';

const CheckoutPage = () => {
  loadSettings();
  return (
    <>
      <CheckoutTemplate></CheckoutTemplate>
    </>
  );
};

export default CheckoutPage;
