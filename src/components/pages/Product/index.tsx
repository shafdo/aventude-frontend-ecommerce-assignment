import { loadSettings } from '../../../utils/storeValuesLoader';
import ProductTemplate from '../../template/Product';
import './styles.scss';

const ProductPage = () => {
  loadSettings();
  return <ProductTemplate></ProductTemplate>;
};

export default ProductPage;
