"use client";
import { useState } from "react";

import AsideMenu from "./aside-menu";
import CustomBreadCrumb from "../../../components/custom-bread-crumb";
import Recommendations from "../../../components/product-card-carousel/recommendations";
import VideoConsultation from "../../../components/video-consultation";
import MockFiltersAsideMenu from "@/_data/catalog/aside-menu-filters.json";
import MockSeoData from "@/_data/catalog/seo-info.json";
import AsideMobile from "@/catalog/_catalog-content/aside-menu/aside-mobile";
import CatalogResults from "@/catalog/_catalog-content/catalog-results";
import SeoAdditional from "@/catalog/_catalog-content/seo-additional";

const CatalogContent = () => {
  const [isAsideVisible, setAsideVisible] = useState(false);
  return (
    <>
      <section>
        <div className="container">
          <div className="pt-4 mb-2 md:mb-7">
            <CustomBreadCrumb
              routes={[
                { id: 1, href: "/", title: "Главная" },
                { id: 2, href: "/catalog", title: "Лодки ПВХ Altair" },
              ]}
            />
          </div>
          <div className="flex gap-10 mb-8">
            <AsideMenu filters={MockFiltersAsideMenu} />
            <AsideMobile
              filters={MockFiltersAsideMenu}
              isVisible={isAsideVisible}
              setIsVisible={setAsideVisible}
            />
            <CatalogResults
              isAsideVisible={isAsideVisible}
              setAsideVisible={setAsideVisible}
            />
          </div>
        </div>
      </section>
      <VideoConsultation />
      <SeoAdditional additionalInfo={MockSeoData} />
      <Recommendations />
      <div className="h-1" />
    </>
  );
};

export default CatalogContent;
