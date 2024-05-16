import classNames from "classnames";

import styles from "./navigation.module.scss";
import ListWithLinks from "../../Lists/ListWithLinks";
import Burger from "@/_components/Burger";
import Button from "@/_components/Button";
import NavigationProps from "@/_components/Header/Navigation/Navigation.interface";
import ArrowIcon from "@/_components/Icons/Arrow";
import Search from "@/_components/Search";
import navigationData from "@/_data/navigation/navigation.json";

const Navigation = ({ isCatalogOpen, setIsCatalogOpen }: NavigationProps) => {
  const handleCatalogClick = () => {
    if (setIsCatalogOpen) {
      setIsCatalogOpen(!isCatalogOpen);
    }
  };
  return (
    <div className={styles.root}>
      <div className={classNames(styles.wrapper, "container")}>
        <div
          className={classNames(
            styles.catalogBtnWrapper,
            isCatalogOpen && styles.isOpen,
          )}
          onClick={handleCatalogClick}
        >
          <Button catalog>
            <div className={styles.burgerWrapper}>
              <Burger catalog isBurgerOpen={isCatalogOpen} />
            </div>
            <span className={styles.catalogBtnText}>Каталог</span>
            <ArrowIcon
              secondary
              customClassname={styles.catalogBtnArrow}
              flip={isCatalogOpen}
            />
          </Button>
        </div>
        <nav className={styles.navigation}>
          <ListWithLinks
            menuData={navigationData}
            listClassname={styles.navList}
            itemClassnames={{
              root: styles.listItem,
              link: styles.itemLink,
            }}
            showArrow
            arrowProps={{ secondary: true }}
          />
        </nav>
        <Search searchClassname={styles.search} />
      </div>
    </div>
  );
};

export default Navigation;
