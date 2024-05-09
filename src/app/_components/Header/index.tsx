import classNames from "classnames";

import styles from "./header.module.scss";
import CityPicker from "@/_components/CityPicker";
import UserInteraction from "@/_components/Header/UserInteraction";

const Header = () => {
  return (
    <header>
      <div>
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
      </div>
    </header>
  );
};

export default Header;
