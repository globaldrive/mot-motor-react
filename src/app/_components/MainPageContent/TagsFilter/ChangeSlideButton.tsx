import classNames from "classnames";
import { Swiper as SwiperType } from "swiper";

import styles from "./tagsFilter.module.scss";
import ArrowIcon from "@/_components/Icons/Arrow";

interface ChangeSlideButtonProps {
  swiper: SwiperType | null;
  left?: boolean;
  right?: boolean;
  main?: boolean;
}

const ChangeSlideButton = ({
  swiper,
  left,
  right,
  main,
}: ChangeSlideButtonProps) => {
  const buttonClassname = classNames(styles.sliderNavigation, {
    [styles.main]: main,
    [styles.navigationLeft]: left,
    [styles.navigationRight]: right,
  });
  const changeSlide = () => {
    left && swiper && swiper.slidePrev();
    right && swiper && swiper.slideNext();
  };
  return (
    <button className={buttonClassname} onClick={changeSlide}>
      <ArrowIcon right={right} left={left} secondary />
    </button>
  );
};

export default ChangeSlideButton;
