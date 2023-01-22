import { Button, ButtonProps } from 'react-bootstrap';

const DefaultButton = (props: ButtonProps) => {
  return (
    <>
      <Button variant={props.variant} className={props.className} size={props.size} onClick={props.onClick}>
        {props.children}
      </Button>
    </>
  );
};

export default DefaultButton;
