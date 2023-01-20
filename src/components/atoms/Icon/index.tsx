import './styles.scss';

interface Props {
  src: string;
  className?: string;
  alt?: string;
}

const defautProps = {
  className: 'icon-md'
};

const Icon = (propsIn: Props) => {
  const props = { ...defautProps, ...propsIn };
  return (
    <>
      <img className={props.className} src={props.src} alt={props.alt} />
    </>
  );
};

export default Icon;
