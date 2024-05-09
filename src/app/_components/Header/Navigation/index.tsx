"use client";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

import styles from "./navigation.module.scss";
import Burger from "@/_components/Burger";
import Button from "@/_components/Button";
import ArrowIcon from "@/_components/Icons/Arrow";
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
          <ul className={styles.navList}>
            {navigationData.map(item => {
              return (
                <li className={styles.listItem} key={item.id}>
                  <Link className={styles.itemLink} href={item.route}>
                    <span>{item.title}</span>
                    {item.content.length > 0 && <ArrowIcon secondary />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Search searchClassname={styles.search} />
      </div>
    </div>
  );
};

export default Navigation;
