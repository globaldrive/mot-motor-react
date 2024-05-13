import classNames from "classnames";

import styles from "./greetingsInfo.module.scss";
import CityPicker from "@/_components/CityPicker";

const GreetingsInfo = () => {
  return (
    <div className={styles.root}>
      <div className={classNames(styles.content, "container")}>
        <CityPicker />
        <div className={styles.storeAboutText}>
          Лодочные моторы, лодки ПВХ, лодки РИБ-ПВХ под мотор, SUP доски,
          квадроциклы, мотобуксировщики, снегоходы, снегоуборщики, сноуборды
          (snowboard)
        </div>
      </div>
    </div>
  );
};

export default GreetingsInfo;
