"use client";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import styles from "./tagsFilter.module.scss";
import ChangeSlideButton from "@/_components/MainPageContent/TagsFilter/ChangeSlideButton";
import ProductCard from "@/_components/ProductCard";
import Tabs from "@/_components/Tabs";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const mockTabsContent = [
  { title: "Выбор покупателей", svgIcon: "/like.svg" },
  { title: "Скидки", svgIcon: "/discount.svg" },
  { title: "Успей купить", svgIcon: "/fire.svg" },
];
const TagsFilter = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const handleTabClick = () => {};

  return (
    <section>
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
          <ChangeSlideButton swiper={swiperInstance} left main />
          <ul className={styles.productCardsList}>
            <Swiper
              className={styles.swiper}
              loop={true}
              onSwiper={swiper => setSwiperInstance(swiper)}
              breakpoints={{
                850: {
                  spaceBetween: 25,
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                1280: {
                  spaceBetween: 14,
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
              }}
            >
              {productCardsData.map(card => {
                return (
                  <SwiperSlide key={card.id}>
                    <li className={styles.listItem}>
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
          <ChangeSlideButton swiper={swiperInstance} right main />
        </div>
        <div className={styles.tagsFilterResultMobile}>
          <ul className={styles.productCardsListMobile}>
            {productCardsData.map(card => {
              return (
                <li className={styles.listItemMobile} key={card.id}>
                  <ProductCard
                    id={card.id}
                    title={card.title}
                    images={card.images}
                    currentPrice={card.currentPrice}
                    oldPrice={card.oldPrice}
                    main
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TagsFilter;
