import { Alert, AlertProps } from 'react-bootstrap';

const AAlert = (props: AlertProps) => {
  return (
    <>
      <Alert variant={props.variant}>{props.children}</Alert>
    </>
  );
};

export default AAlert;
