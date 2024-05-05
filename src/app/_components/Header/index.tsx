import styles from "./header.module.scss";
import CityPicker from "@/_components/CityPicker";

const Header = () => {
  return (
    <header>
      <div className={"container"}>
        <div className={styles.topLine}>
          <CityPicker />
        </div>
      </div>
    </header>
  );
};

export default Header;
