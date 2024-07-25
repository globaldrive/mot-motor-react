import ContactsAndShareInformation from "./contacts-and-share-information";
import TabsSwitcher from "./tabs-switcher";
import Recommendations from "../../../components/product-card-carousel/recommendations";
import VideoConsultation from "../../../components/video-consultation";
import productCards from "@/_data/mock-product-cards-data/product-card-data.json";
import ExtraOffers from "@/products/_detailed-card-content/extra-offers";
import FirstImpression from "@/products/_detailed-card-content/first-impression";
import SimilarProducts from "@/products/_detailed-card-content/similar-products";

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
      <Recommendations />
      <div className="mb-5"></div>
    </>
  );
};

export default DetailedCardContent;
