import { Button, ButtonProps } from 'react-bootstrap';
import Icon from '../Icon';

interface Props extends ButtonProps {
  iconSrc: string;
}

export const DefaultButton = (props: ButtonProps) => {
  return (
    <>
      <Button variant={props.variant} className={props.className} size={props.size} onClick={props.onClick}>
        {props.children}
      </Button>
    </>
  );
};

export const DefaultButtonWithIcon = (props: Props) => {
  return (
    <>
      <Button variant={props.variant} className={props.className} size={props.size} onClick={props.onClick}>
        <Icon src={props.iconSrc} className="icon-xxs mx-2"></Icon>
        {props.children}
      </Button>
    </>
  );
};
