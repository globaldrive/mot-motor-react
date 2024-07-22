"use client";
import { useState } from "react";

import CustomBreadCrumb from "@/_components/CustomBreadCrumb";
import MockFiltersAsideMenu from "@/_data/catalog/asideMenuFilters.json";
import AsideMenu from "@/catalog/_CatalogContent/AsideMenu";
import AsideMobile from "@/catalog/_CatalogContent/AsideMenu/AsideMobile";
import CatalogResults from "@/catalog/_CatalogContent/CatalogResults";

const CatalogContent = () => {
  const [isAsideVisible, setAsideVisible] = useState(false);
  return (
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
  );
};

export default CatalogContent;
