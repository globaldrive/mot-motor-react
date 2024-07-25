"use client";
import { useSelector } from "react-redux";

import GreetingsInfo from "./greetings-info";
import Navigation from "./navigation";
import Overlay from "./overlay";
import UserInteraction from "./user-interaction";
import BurgerMenu from "../burger-menu";
import PopupCatalog from "../popup-catalog";
import popupCatalogData from "@/_data/catalog/catalog-header.json";
import { RootState } from "@/_store/store";

const Header = () => {
  const isCatalogPopupOpen = useSelector(
    (state: RootState) => state.catalogPopup,
  );
  return (
    <>
      <header className="relative">
        <GreetingsInfo />
        <UserInteraction />
        <Navigation />
        <PopupCatalog catalogData={popupCatalogData} main />
        <BurgerMenu />
      </header>
      <Overlay />
    </>
  );
};

export default Header;
