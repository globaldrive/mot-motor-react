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
      <AdditionalInformation />
    </>
  );
};

export default MainPageContent;
