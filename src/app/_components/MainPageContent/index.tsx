import AdditionalInformation from "@/_components/MainPageContent/AdditionalInformation";
import Benefits from "@/_components/MainPageContent/Benefits";
import BestOffers from "@/_components/MainPageContent/BestOffers";
import Brands from "@/_components/MainPageContent/Brands";
import MainBanner from "@/_components/MainPageContent/MainBanner";
import NewArrivals from "@/_components/MainPageContent/NewArrivals";
import TagsFilter from "@/_components/MainPageContent/TagsFilter";
import VideoConsultation from "@/_components/MainPageContent/VideoConsultation";

const MainPageContent = () => {
  return (
    <>
      <MainBanner />
      <Benefits />
      <TagsFilter />
      <VideoConsultation />
      <BestOffers />
      <NewArrivals />
      <Brands />
      <div>Секция Бренды (Не делаем - ждем дизайн)</div>
      <div>
        Секция Рекомендуем / хит продаж / успейте купить (Не делаем - ждем
        дизайн)
      </div>
      <AdditionalInformation />
    </>
  );
};

export default MainPageContent;
