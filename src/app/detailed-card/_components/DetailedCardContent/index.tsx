import VideoConsultation from "@/_components/VideoConsultation";
import productCards from "@/_data/mockProductCardsData/productCardData.json";
import ContactsAndShareInformation from "@/detailed-card/_components/ContactsAndShareInformation";
import FirstImpression from "@/detailed-card/_components/DetailedCardContent/FirstImpression";
import TabsSwitcher from "@/detailed-card/_components/DetailedCardContent/TabsSwitcher";

const DetailedCardContent = () => {
  return (
    <>
      <FirstImpression />
      <TabsSwitcher />
      {/*<SimilarProducts />*/}
      <VideoConsultation />
      <ContactsAndShareInformation
        productTitle={productCards[1].title}
        productId={productCards[1].id}
      />
    </>
  );
};

export default DetailedCardContent;
