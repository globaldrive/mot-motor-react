import classNames from "classnames";
import Image from "next/image";

import styles from "./productCard.module.scss";
import { Button } from "@/_components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";

const ProductCard = ({
  id,
  images,
  title,
  currentPrice,
  oldPrice,
  main,
}: ProductCardProps) => {
  const productCardClassname = classNames(styles.root, {
    [styles.main]: main,
  });
  const bankCreditMonths = 12;
  const savingAmount = Math.ceil(oldPrice - currentPrice);
  const partlyPaymentAmount = Math.ceil(currentPrice / bankCreditMonths);

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className={styles.priceWrapper}>
          <div className={styles.oldPrice}>{oldPrice} руб.</div>
          <div className={styles.currentPrice}>{currentPrice} руб.</div>
          <div className={styles.savingWrapper}>
            <Image
              src="/discount.svg"
              alt="Иконка процента"
              width={16}
              height={16}
            />
            <div>Экономия {savingAmount} руб.</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex flex-col">
          <Button>Купить в 1 клик</Button>
          <Button>Купить</Button>
        </div>
        <div className={styles.partlyPaymentWrapper}>
          <span className={styles.partlyPaymentText}>
            Или оплачивай частями
          </span>
          <div className={styles.partlyPaymentAmount}>
            от {partlyPaymentAmount} / мес.
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
