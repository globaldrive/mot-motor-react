import AdditionalInformation from "@/_components/MainPageContent/AdditionalInformation";
import Benefits from "@/_components/MainPageContent/Benefits";
import MainBanner from "@/_components/MainPageContent/MainBanner";
import TagsFilter from "@/_components/MainPageContent/TagsFilter";

const MainPageContent = () => {
  return (
    <>
      <MainBanner />
      <Benefits />
      <TagsFilter />
      {/*<VideoConsultation />*/}
      <div>Секция Новые поступления</div>
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
