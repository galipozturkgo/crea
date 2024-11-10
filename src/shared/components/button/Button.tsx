import classNames from 'classnames';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => (
  <button className={classNames('border p-0.5', className)} onClick={onClick}>
    {label}
  </button>
);

export default Button;
