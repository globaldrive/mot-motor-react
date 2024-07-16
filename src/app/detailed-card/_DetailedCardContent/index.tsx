import ContactsAndShareInformation from "./ContactsAndShareInformation";
import Reccomendations from "@/_components/ProductCardCarousel/Recommendations";
import VideoConsultation from "@/_components/VideoConsultation";
import productCards from "@/_data/mockProductCardsData/productCardData.json";
import ExtraOffers from "@/detailed-card/_DetailedCardContent/ExtraOffers";
import FirstImpression from "@/detailed-card/_DetailedCardContent/FirstImpression";
import SimilarProducts from "@/detailed-card/_DetailedCardContent/SimilarProducts";
import TabsSwitcher from "@/detailed-card/_DetailedCardContent/TabsSwitcher";

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
      <Reccomendations />
    </>
  );
};

export default DetailedCardContent;
