import { Swiper as SwiperType } from "swiper";

import ArrowIcon from "@/_components/Icons/Arrow";

interface ChangeSlideButtonProps {
  swiper: SwiperType | null;
  left?: boolean;
  right?: boolean;
  main?: boolean;
}

const ChangeSlideButton = ({ swiper, left, right }: ChangeSlideButtonProps) => {
  const changeSlide = () => {
    left && swiper && swiper.slidePrev();
    right && swiper && swiper.slideNext();
  };
  return (
    <button
      className={`hidden xl:flex absolute top-1/2 transform -translate-y-1/2 w-12 h-12 justify-center items-center border-none outline-none rounded-full bg-mm-main cursor-pointer hover:bg-mm-main-hover transition-colors duration-200 ${left && "-left-14"} ${right && "-right-14"} z-10`}
      onClick={changeSlide}
    >
      <ArrowIcon right={right} left={left} secondary />
    </button>
  );
};

export default ChangeSlideButton;
