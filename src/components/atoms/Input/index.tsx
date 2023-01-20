import { Form, FormProps } from 'react-bootstrap';
import './styles.scss';

interface Props extends FormProps {
  size?: 'sm' | 'lg';
  type: string;
}

export const Input = (props: Props) => {
  return (
    <>
      <Form.Control size={props.size} type={props.type} placeholder={props.placeholder} />
    </>
  );
};
