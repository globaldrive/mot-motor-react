import classNames from "classnames";

import styles from "./header.module.scss";
import CatalogMenuList from "@/_components/Catalog/CatalogMenuList";
import CityPicker from "@/_components/CityPicker";
import Navigation from "@/_components/Header/Navigation";
import UserInteraction from "@/_components/Header/UserInteraction";
import catalogMenuListData from "@/_data/catalogHeader/catalogHeader.json";

const Header = () => {
  return (
    <header>
      <div className={styles.topLine}>
        <div className={classNames(styles.topLineContent, "container")}>
          <CityPicker />
          <div className={styles.topLineText}>
            Лодочные моторы, лодки ПВХ, лодки РИБ-ПВХ под мотор, SUP доски,
            квадроциклы, мотобуксировщики, снегоходы, снегоуборщики, сноуборды
            (snowboard)
          </div>
        </div>
      </div>
      <UserInteraction />
      <Navigation />
      <div className={classNames(styles.catalogMenu, "container")}>
        <CatalogMenuList menuData={catalogMenuListData} showArrow />
      </div>
    </header>
  );
};

export default Header;
