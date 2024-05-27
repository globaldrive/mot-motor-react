import classNames from "classnames";

import styles from "./button.module.scss";
import ButtonProps from "@/_components/Button/Button.interface";

const Button = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  main,
  secondary,
  catalog,
  catalogBurgerMenu,
}: ButtonProps) => {
  const buttonClassname = classNames(styles.root, {
    [styles.main]: main,
    [styles.secondary]: secondary,
    [styles.catalog]: catalog,
    [styles.catalogBurgerMenu]: catalogBurgerMenu,
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
