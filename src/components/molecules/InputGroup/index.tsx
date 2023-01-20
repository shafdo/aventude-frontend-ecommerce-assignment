import { FormProps } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Icon from '../../atoms/Icon';
import { Input } from '../../atoms/Input';

interface Props extends FormProps {
  iconSrc: string;
}

const GroupInput = (props: Props) => {
  return (
    <>
      <InputGroup className={props.className}>
        <InputGroup.Text>
          <Icon src={props.iconSrc} className="icon-xs"></Icon>
        </InputGroup.Text>
        <Input type="text" size="lg" placeholder="Search" />
      </InputGroup>
    </>
  );
};

export default GroupInput;
