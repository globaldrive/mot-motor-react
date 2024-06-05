import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./productCard.module.scss";
import hangkaiPng from "@/_assets/images/pngs/hangkai.png";
import Button from "@/_components/Button";

const ProductCard = ({
  id,
  images,
  title,
  currentPrice,
  oldPrice,
  main,
}: ProductCardProps) => {
  const [cardHovered, setCardHovered] = useState(false);
  const productCardClassname = classNames(styles.root, {
    [styles.main]: main,
    [styles.hovered]: cardHovered,
  });
  const bankCreditMonths = 12;
  const savingAmount = Math.ceil(oldPrice - currentPrice);
  const partlyPaymentAmount = Math.ceil(currentPrice / bankCreditMonths);

  const slides = images.map((img, index) => {
    return (
      <SwiperSlide key={String(id) + String(index)}>
        <Image
          src={hangkaiPng}
          alt="Изображение товара"
          width={211}
          height={211}
        />
      </SwiperSlide>
    );
  });

  const handleMouseEnter = () => {
    setCardHovered(true);
  };

  const handleMouseLeave = () => {
    setCardHovered(false);
  };

  return (
    <div
      className={productCardClassname}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.productCardContent}>
        <Swiper
          className={styles.swiper}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
        >
          {slides}
        </Swiper>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.priceWrapper}>
          <div className={styles.oldPrice}>{oldPrice} руб.</div>
          <div className={styles.currentPrice}>{currentPrice} руб.</div>
          <div className={styles.savingWrapper}>
            <Image src="" alt="Иконка процента" width={16} height={16} />
            <div>Экономия {savingAmount} руб.</div>
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          {cardHovered && <Button secondary>Купить в 1 клик</Button>}
          <Button main>Купить</Button>
        </div>
        {cardHovered && (
          <div className={styles.partlyPaymentWrapper}>
            <span className={styles.partlyPaymentText}>
              Или оплачивай частями
            </span>
            <div className={styles.partlyPaymentAmount}>
              от {partlyPaymentAmount} / мес.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
