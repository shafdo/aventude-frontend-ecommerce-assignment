import './styles.scss';

interface Props {
  children: string;
  className?: string;
}

const Paragraph = (props: Props) => {
  return (
    <>
      <p className={props.className}>{props.children}</p>
    </>
  );
};

export default Paragraph;
