"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./mainBanner.module.scss";
import "./customerSwiper.scss";
import mainBannerJpg from "@/_assets/images/jpgs/mainBanner.jpg";
import promoBannerJpg from "@/_assets/images/jpgs/tradeIn.jpg";
import mainBannerData from "@/_data/mainPage/mainBanner.json";

const MainBanner = () => {
  const mainSliderAutoplayDelay = 3000;
  const slides = mainBannerData[0].content.map(banner => {
    return (
      <SwiperSlide key={`product-${banner.id}`}>
        <Link href={banner.route} className={styles.mainSliderLink}>
          <Image
            className={styles.mainBannerImg}
            src={mainBannerJpg}
            alt="Главный банер"
            width={670}
            height={415}
          />
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <section className={classNames(styles.mainBannerSection, "container")}>
      <div className={styles.bannersWrapper}>
        <div className={styles.mainBannerWrapper}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: mainSliderAutoplayDelay,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {slides}
          </Swiper>
        </div>
        <div className={styles.promoBannersWrapper}>
          <ul className={styles.promoBannersList}>
            {mainBannerData[1].content.map(banner => {
              return (
                <li key={banner.id} className={styles.promoListItem}>
                  <Link href={banner.route} className={styles.promoLink}>
                    <Image
                      className={styles.promoBannerImg}
                      src={promoBannerJpg}
                      alt="Промо банер"
                      width={238}
                      height={200}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
