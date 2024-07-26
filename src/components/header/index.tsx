"use client";
import GreetingsInfo from "./greetings-info";
import Navigation from "./navigation";
import Overlay from "./overlay";
import UserInteraction from "./user-interaction";
import BurgerMenu from "../burger-menu";
import PopupCatalog from "../popup-catalog";
import popupCatalogData from "@/_data/catalog/catalog-header.json";

const Header = () => {
  return (
    <>
      <header className="relative">
        <GreetingsInfo />
        <UserInteraction />
        <Navigation />
        <PopupCatalog catalogData={popupCatalogData} />
        <BurgerMenu />
      </header>
      <Overlay />
    </>
  );
};

export default Header;
