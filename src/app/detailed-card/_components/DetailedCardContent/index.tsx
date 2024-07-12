import VideoConsultation from "@/_components/VideoConsultation";
import FirstImpression from "@/detailed-card/_components/DetailedCardContent/FirstImpression";
import TabsSwitcher from "@/detailed-card/_components/DetailedCardContent/TabsSwitcher";

const DetailedCardContent = () => {
  return (
    <>
      <FirstImpression />
      <TabsSwitcher />
      {/*<SimilarProducts />*/}
      <VideoConsultation />
    </>
  );
};

export default DetailedCardContent;
