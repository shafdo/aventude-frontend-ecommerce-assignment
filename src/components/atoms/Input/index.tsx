import { Form, FormProps } from 'react-bootstrap';
import './styles.scss';

interface Props extends FormProps {
  size?: 'sm' | 'lg';
  type: string;
  label?: string;
}

export const Input = (props: Props) => {
  return (
    <>
      <Form.Control className={props.className} size={props.size} type={props.type} placeholder={props.placeholder} />
    </>
  );
};

export const InputWithLabel = (props: Props) => {
  return (
    <>
      <Form.Group className={props.className} id={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control size={props.size} type={props.type} placeholder={props.placeholder} />
      </Form.Group>
    </>
  );
};
