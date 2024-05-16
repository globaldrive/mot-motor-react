"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import styles from "./basket.module.scss";
import basketIcon from "@/_assets/images/general/basket.svg";
import { RootState } from "@/_store/store";
import RoutesPaths from "@/types/enums/routes";

const Basket = () => {
  const purchasesQnt = useSelector(
    (state: RootState) => state.userDetails.basketPurchasesQnt,
  );
  const totalSumInBasket = useSelector(
    (state: RootState) => state.userDetails.basketSumTotal,
  );
  return (
    <Link href={RoutesPaths.basket} className={styles.root}>
      <div className={styles.basketImageWrapper}>
        <Image src={basketIcon} alt="Иконка корзины" width={32} height={32} />
        <div className={styles.qnt}>{purchasesQnt}</div>
      </div>
      <div className={styles.totalAmount}>{totalSumInBasket} ₽</div>
    </Link>
  );
};

export default Basket;
