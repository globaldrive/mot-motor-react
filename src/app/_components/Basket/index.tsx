"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

import styles from "./basket.module.scss";
import basketIcon from "@/_assets/images/general/basket.svg";
import { RootState } from "@/_store/store";

const Basket = () => {
  const purchasesQnt = useSelector(
    (state: RootState) => state.userDetails.basketPurchasesQnt,
  );
  const totalSumInBasket = useSelector(
    (state: RootState) => state.userDetails.basketSumTotal,
  );
  return (
    <div className={styles.root}>
      <div className={styles.qnt}>{purchasesQnt}</div>
      <Image src={basketIcon} alt="Иконка корзины" width={27} height={27} />
      <div>{totalSumInBasket} ₽</div>
    </div>
  );
};

export default Basket;
