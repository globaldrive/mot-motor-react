"use client";
import { useState } from "react";

import BurgerMenu from "@/_components/BurgerMenu";
import PopupCatalog from "@/_components/Catalog/PopupCatalog";
import GreetingsInfo from "@/_components/Header/GreetingsInfo";
import Navigation from "@/_components/Header/Navigation";
import UserInteraction from "@/_components/Header/UserInteraction";
import popupCatalogData from "@/_data/catalogHeader/catalogHeader.json";

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  return (
    <header>
      <GreetingsInfo />
      <UserInteraction />
      <Navigation
        isCatalogOpen={isCatalogOpen}
        setIsCatalogOpen={setIsCatalogOpen}
      />
      <PopupCatalog
        showCatalogMenu={isCatalogOpen}
        catalogData={popupCatalogData}
        main
      />
      <BurgerMenu />
    </header>
  );
};

export default Header;
