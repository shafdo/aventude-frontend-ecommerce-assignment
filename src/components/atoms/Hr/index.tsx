import './styles.scss';

interface Props {
  className?: string;
}

const Hr = (props: Props) => {
  return (
    <>
      <hr className={props.className} />
    </>
  );
};

export default Hr;
