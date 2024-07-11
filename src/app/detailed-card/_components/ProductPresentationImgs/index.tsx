import Image from "next/image";

import HangkaiPng from "@/_assets/images/pngs/hangkai.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/_components/ui/carousel";

const ProductPresentationImgs = () => {
  return (
    <div className="flex gap-16 justify-center items-center mb-8">
      <div className="w-24 min-w-24">
        <Carousel orientation="vertical" className="w-fit">
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((img, index) => {
              return (
                <CarouselItem key={index} className="w-fit">
                  <div className="flex justify-center items-center border border-gray-300 rounded-lg w-fit">
                    <Image
                      src={HangkaiPng}
                      alt="Фотография продукции"
                      width={70}
                      height={70}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div>
        <Carousel orientation="horizontal">
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((img, index) => {
              return (
                <CarouselItem key={index}>
                  <div>
                    <Image
                      src={HangkaiPng}
                      alt="Фотография продукции"
                      width={354}
                      height={354}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductPresentationImgs;
