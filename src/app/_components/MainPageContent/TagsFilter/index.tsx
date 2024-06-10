"use client";
import classNames from "classnames";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css/navigation";
import styles from "./tagsFilter.module.scss";
import ProductCard from "@/_components/ProductCard";
import Tabs from "@/_components/Tabs";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const mockTabsContent = [
  { title: "Выбор покупателей", svgIcon: "1" },
  { title: "Скидки", svgIcon: "2" },
  { title: "Успей купить", svgIcon: "3" },
];
const TagsFilter = () => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const swiper = useSwiper();
  const handleTabClick = () => {};
  const handleLeftSwiperNavigation = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleRightSwiperNavigation = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className={styles.tagsFilterSection}>
      <div className="container">
        <div className={styles.tagsWrapper}>
          <Tabs
            tabs={mockTabsContent}
            activeTabIndex={activeTab}
            setActiveTabIndex={setActiveTab}
            onTabClick={handleTabClick}
            showIcon
            main
          />
        </div>
        <div className={styles.tagsFilterResult}>
          <button
            className={classNames(
              styles.sliderNavigation,
              styles.navigationLeft,
            )}
            onClick={handleLeftSwiperNavigation}
          >
            Slide to the left
          </button>
          <ul className={styles.productCardsList}>
            <Swiper
              className={styles.swiper}
              loop={true}
              slidesPerView={4}
              slidesPerGroup={4}
              spaceBetween={14}
              ref={swiperRef}
            >
              {productCardsData.map(card => {
                return (
                  <SwiperSlide key={card.id}>
                    <li>
                      <ProductCard
                        id={card.id}
                        title={card.title}
                        images={card.images}
                        currentPrice={card.currentPrice}
                        oldPrice={card.oldPrice}
                        main
                      />
                    </li>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ul>
          <button
            className={classNames(
              styles.sliderNavigation,
              styles.navigationRight,
            )}
            onClick={handleRightSwiperNavigation}
          >
            Slide to the right
          </button>
        </div>
      </div>
    </section>
  );
};

export default TagsFilter;
