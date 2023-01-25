import Swal from 'sweetalert2';
import { SweetAlertIcon } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface alertProps {
  title: string;
  msg: string;
}

const MySwal = withReactContent(Swal);
const defaultOpts = {
  showConfirmButton: false,
  timer: 3500
};

export const showBasicSuccessAlert = async (options: alertProps) => {
  await MySwal.fire({
    icon: 'success',
    title: options.title,
    text: options.msg,
    ...defaultOpts
  });
};

export const showBasicErrorAlert = async (options: alertProps) => {
  await MySwal.fire({
    icon: 'error',
    title: options.title,
    text: options.msg,
    ...defaultOpts
  });
};
