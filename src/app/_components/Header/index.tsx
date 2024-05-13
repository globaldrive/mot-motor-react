import classNames from "classnames";

import CatalogMenu from "./CategoryOffersMenu";
import styles from "./header.module.scss";
import GreetingsInfo from "@/_components/Header/GreetingsInfo";
import Navigation from "@/_components/Header/Navigation";
import UserInteraction from "@/_components/Header/UserInteraction";

const Header = () => {
  return (
    <header>
      <GreetingsInfo />
      <UserInteraction />
      <Navigation />
      <div className={classNames(styles.catalogMenu, "container")}>
        <CatalogMenu showSvg showArrow />
      </div>
    </header>
  );
};

export default Header;
