"use client";
import classNames from "classnames";
import { useState } from "react";

import styles from "./navigation.module.scss";
import Burger from "@/_components/Burger";
import Button from "@/_components/Button";
import ArrowIcon from "@/_components/Icons/Arrow";
import ListWithLinks from "@/_components/ListWithLinks";
import Search from "@/_components/Search";
import navigationData from "@/_data/navigation/navigation.json";

const Navigation = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const handleCatalogClick = () => {
    setIsCatalogOpen(!isCatalogOpen);
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
            <ArrowIcon secondary customClassname={styles.catalogBtnArrow} />
          </Button>
        </div>
        <nav className={styles.navigation}>
          <ListWithLinks
            menuData={navigationData}
            listClassname={styles.navList}
            itemClassnames={{
              rootClassname: styles.listItem,
              linkClassname: styles.itemLink,
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
