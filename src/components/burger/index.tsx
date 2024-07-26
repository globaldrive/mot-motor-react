"use client";
import classNames from "classnames";

import styles from "./burger.module.scss";

interface BurgerProps extends React.HTMLAttributes<HTMLDivElement> {
  isBurgerOpen?: boolean;
  onBurgerClick?: () => void;
  mobile?: boolean;
  catalog?: boolean;
  asideMenu?: boolean;
}

const Burger = ({
  isBurgerOpen,
  onBurgerClick,
  mobile,
  catalog,
  asideMenu,
  className,
}: BurgerProps) => {
  const burgerClassname = classNames(
    styles.burger,
    isBurgerOpen && styles.isOpen,
    className,
    {
      [styles.mobile]: mobile,
      [styles.catalog]: catalog,
      [styles.asideMenu]: asideMenu,
    },
  );

  const handleBurgerClick = () => {
    if (onBurgerClick) {
      onBurgerClick();
    }
  };
  return (
    <div className={burgerClassname} onClick={handleBurgerClick}>
      <div></div>
    </div>
  );
};

export default Burger;
