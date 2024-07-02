"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import styles from "./tagsFilter.module.scss";
import ChangeSlideButton from "@/_components/MainPageContent/TagsFilter/ChangeSlideButton";
import ProductCard from "@/_components/ProductCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/_components/ui/tabs";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const mockTabsContent = [
  {
    title: "Выбор покупателей",
    svgIcon: "/like.svg",
    tabsContent: "Карточки товара 1й набор",
  },
  {
    title: "Скидки",
    svgIcon: "/discount.svg",
    tabsContent: "Карточки товара 2й набор",
  },
  {
    title: "Успей купить",
    svgIcon: "/fire.svg",
    tabsContent: "Карточки товара 3й набор",
  },
];
const TagsFilter = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const handleTabClick = () => {};

  return (
    <section>
      <div className="container">
        <Tabs
          defaultValue={mockTabsContent[0].title}
          className="w-[400px] md:mb-9 xl:mb-14"
        >
          <TabsList className="bg-transparent">
            {mockTabsContent.map(tab => {
              return (
                <TabsTrigger
                  className="flex gap-3 mr-12 text-xl font-bold data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-mm-main "
                  key={tab.title}
                  value={tab.title}
                >
                  <Image
                    src={tab.svgIcon}
                    alt="Иконка тега"
                    width={26}
                    height={26}
                  />
                  {tab.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {mockTabsContent.map(tab => {
            return (
              <TabsContent key={tab.tabsContent} value={tab.title}>
                {tab.tabsContent}
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="relative hidden md:block md:mx-2.5">
          <ChangeSlideButton swiper={swiperInstance} left main />
          <ul className="flex justify-between gap-3.5">
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
                  spaceBetween: 10,
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
              }}
            >
              {productCardsData.map(card => {
                return (
                  <SwiperSlide key={card.id}>
                    <li className="w-fit">
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
        <div className="flex justify-center md:hidden">
          <ul className="grid grid-cols-2 w-fit">
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
