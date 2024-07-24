import ProductCard from "@/_components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_components/ui/carousel";
import ProductCardContent from "@/_types/intefaces/productCard";

interface ProductCardCarouselProps {
  cardsContent: ProductCardContent[];
}

const ProductCardCarousel = ({ cardsContent }: ProductCardCarouselProps) => {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {cardsContent.map(card => {
          return (
            <CarouselItem key={card.id} className="sm:basis-1/3 lg:basis-1/4">
              <ProductCard cardData={card} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious variant="default" className="hidden lg:flex p-0" />
      <CarouselNext variant="default" className="hidden lg:flex p-0" />
    </Carousel>
  );
};

export default ProductCardCarousel;
