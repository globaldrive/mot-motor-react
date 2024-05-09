"use client";
import classNames from "classnames";
import { useState } from "react";

import styles from "./burger.module.scss";

const Burger = ({ onBurgerClick }: BurgerProps) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
    if (onBurgerClick) {
      onBurgerClick();
    }
  };
  return (
    <div
      className={classNames(styles.burger, isBurgerOpen && styles.isOpen)}
      onClick={handleBurgerClick}
    >
      <div></div>
    </div>
  );
};

export default Burger;
