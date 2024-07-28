import ContactsAndShareInformation from "./contacts-and-share-information";
import ExtraOffers from "./extra-offers";
import FirstImpression from "./first-impression";
import SimilarProducts from "./similar-products";
import TabsSwitcher from "./tabs-switcher";
import CarouselRecommendations from "@/components/carousel-recommendations";
import VideoConsultation from "@/components/video-consultation";
import productCards from "@/data/mock-product-cards-data/product-card-data.json";

const DetailedCardContent = () => {
  return (
    <>
      <FirstImpression />
      <TabsSwitcher />
      <SimilarProducts />
      <ExtraOffers />
      <VideoConsultation />
      <ContactsAndShareInformation
        productTitle={productCards[1].title}
        productId={productCards[1].id}
      />
      <CarouselRecommendations />
      <div className="mb-5"></div>
    </>
  );
};

export default DetailedCardContent;
