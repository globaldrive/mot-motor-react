import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./productCard.module.scss";
import hangkaiPng from "@/_assets/images/pngs/hangkai.png";
import { Button } from "@/_components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/_components/ui/carousel";
import RoutesPaths from "@/_types/enums/routes";

const ProductCard = ({ cardData }: ProductCardProps) => {
  const { id, images, title, currentPrice, oldPrice } = cardData;
  const bankCreditMonths = 12;
  const savingAmount = Math.ceil(oldPrice - currentPrice);
  const partlyPaymentAmount = Math.ceil(currentPrice / bankCreditMonths);
  const router = useRouter();

  const handleProductCardClick = () => {
    router.push(RoutesPaths.productCard + id);
  };
  const handleBuyOnOneClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBuyBtnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handlePartlyPaymentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleProductCardClick}
      className="block px-4 pt-3.5 pb-6 h-full w-[282px] border border-white border-solid hover:border-[#ccc] rounded-2xl cursor-pointer"
    >
      <div>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {images.map((img, index) => {
              return (
                <CarouselItem key={String(id) + String(index)}>
                  <div className="flex justify-center">
                    <Image
                      className="w-36 h-36 md:w-52 md:h-52 select-none"
                      src={hangkaiPng}
                      alt="Изображение товара"
                      width={211}
                      height={211}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        {/*</Swiper>*/}
        <h4 className={classNames(styles.title, "mb-5 text-sm font-bold")}>
          {title}
        </h4>
        <div className="flex flex-col gap-1 mb-8">
          <div className="text-sm line-through opacity-30">{oldPrice} руб.</div>
          <div className="text-xl text-mm-main">{currentPrice} руб.</div>
          <div className="flex gap-1.5 text-sm font-medium">
            <Image
              src="./discount.svg"
              alt="Иконка процента"
              width={16}
              height={16}
            />
            <div>Экономия {savingAmount} руб.</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5 ">
          <Button onClick={e => handleBuyOnOneClick(e)} variant="secondary">
            Купить в 1 клик
          </Button>
          <Button onClick={e => handleBuyBtnClick(e)}>Купить</Button>
        </div>
        <div
          onClick={e => handlePartlyPaymentClick(e)}
          className="flex flex-col p-2.5 gap-1 justify-center items-center bg-mm-cement rounded-2xl select-none hover:opacity-70"
        >
          <span className="text-sm font-medium opacity-30">
            Или оплачивай частями
          </span>
          <div className="text-base font-bold text-mm-main">
            от {partlyPaymentAmount} / мес.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
