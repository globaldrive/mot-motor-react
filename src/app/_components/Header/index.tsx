import styles from "./header.module.scss";
import CityPicker from "@/_components/CityPicker";
import UserInteraction from "@/_components/Header/UserInteraction";

const Header = () => {
  return (
    <header>
      <div className={"container"}>
        <div className={styles.topLine}>
          <CityPicker />
          <div>
            Лодочные моторы, лодки ПВХ, лодки РИБ-ПВХ под мотор, SUP доски,
            квадроциклы, мотобуксировщики, снегоходы, снегоуборщики, сноуборды
            (snowboard)
          </div>
        </div>
        <UserInteraction />
      </div>
    </header>
  );
};

export default Header;
