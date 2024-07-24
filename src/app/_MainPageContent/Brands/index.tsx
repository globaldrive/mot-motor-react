"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";

import RightArrowSvg from "@/_assets/images/svgs/RightArrow.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_components/ui/carousel";
import brandsData from "@/_data/mockBrands/mockBrands.json";

const Brands = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <section>
      <div className="container">
        <div className="flex mb-5 md:mb-12 items-center gap-3 md:gap-8">
          <h2 className="text-2xl md:text-3xl font-medium">
            Популярные бренды
          </h2>
          <Image
            className="md:w-8 md:h-3.5"
            src={RightArrowSvg}
            alt="arrow"
            width={12}
            height={8}
          />
        </div>
        <div className="relative md:mx-2.5">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {brandsData.map(brand => {
                return (
                  <CarouselItem
                    key={brand.id}
                    className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/6"
                  >
                    <div className="w-fit">
                      <Image
                        className="w-auto h-auto md:w-[170px] md:h-[88px] select-none"
                        src={`/brands/${brand.id}.png`}
                        alt="brand logo"
                        width={120}
                        height={64}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious variant="main" />
            <CarouselNext variant="main" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Brands;
