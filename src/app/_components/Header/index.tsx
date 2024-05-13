import CatalogMenu from "@/_components/Catalog/CatalogMenu";
import GreetingsInfo from "@/_components/Header/GreetingsInfo";
import Navigation from "@/_components/Header/Navigation";
import UserInteraction from "@/_components/Header/UserInteraction";

const Header = () => {
  return (
    <header>
      <GreetingsInfo />
      <UserInteraction />
      <Navigation />
      <CatalogMenu showSvg showArrow />
    </header>
  );
};

export default Header;
