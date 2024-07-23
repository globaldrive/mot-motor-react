import { EmblaCarouselType } from "embla-carousel";
import { Dispatch, SetStateAction } from "react";

interface CarouselPaginationProps
  extends React.HTMLAttributes<HTMLUListElement> {
  totalLength: number;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  emblaApi: EmblaCarouselType | undefined;
}

const CarouselPagination = ({
  totalLength,
  activeIndex = 0,
  setActiveIndex,
  emblaApi,
  className,
}: CarouselPaginationProps) => {
  const handleButtonClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    currentInx: number,
  ) => {
    e.stopPropagation();
    setActiveIndex(currentInx);
    if (emblaApi) {
      emblaApi.scrollTo(currentInx); // Прокручиваем к выбранному слайду (index начинается с 0)
    }
  };

  return (
    <ul className={className}>
      {Array.from({ length: totalLength }).map((_, index) => {
        const activeItem = activeIndex === index + 1;
        return (
          <li
            key={index}
            className={`w-1.5 h-1.5 rounded-full opacity-15 ${activeItem ? "bg-mm-main w-5 opacity-100" : "bg-mm-primaryText"}`}
            onClick={e => handleButtonClick(e, index)}
          />
        );
      })}
    </ul>
  );
};

export default CarouselPagination;
