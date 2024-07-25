import Recommendations from "../../components/product-card-carousel/recommendations";
import VideoConsultation from "../../components/video-consultation";
import AdditionalInformation from "@/_main-page-content/additional-information";
import Benefits from "@/_main-page-content/benefits";
import BestOffers from "@/_main-page-content/best-offers";
import Brands from "@/_main-page-content/brands";
import MainBanner from "@/_main-page-content/main-banner";
import NewArrivals from "@/_main-page-content/new-arrivals";
import TagsFilter from "@/_main-page-content/tags-filter";

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
      <Recommendations />
      <AdditionalInformation />
    </>
  );
};

export default MainPageContent;
