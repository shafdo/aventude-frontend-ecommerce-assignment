import Logo from './cart.svg';
import './styles.scss';

interface Props {
  className?: string;
}

const StoreLogo = (props: Props) => {
  return (
    <>
      <img className={props.className} src={Logo} />
    </>
  );
};

export default StoreLogo;
