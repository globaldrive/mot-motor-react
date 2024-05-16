import classNames from "classnames";

import styles from "./button.module.scss";
import ButtonProps from "@/_components/Button/Button.interface";

const Button = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  secondary,
  catalog,
}: ButtonProps) => {
  const buttonClassname = classNames(styles.root, {
    [styles.secondary]: secondary,
    [styles.catalog]: catalog,
  });
  return (
    <button
      className={buttonClassname}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
