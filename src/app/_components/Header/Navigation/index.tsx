import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./navigation.module.scss";
import Burger from "@/_components/Burger";
import Button from "@/_components/Button";
import ArrowIcon from "@/_components/Icons/Arrow";
import ListItemLink from "@/_components/Lists/ListWithLinks/ListItemLink";
import Search from "@/_components/Search";
import navigationData from "@/_data/navigation/navigation.json";
import { toggleCatalogPopup } from "@/_store/slices/Catalogs";
import { RootState } from "@/_store/store";

const Navigation = () => {
  const isCatalogOpen = useSelector(
    (state: RootState) => state.catalogPopup.isCatalogPopupOpen,
  );
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleMouseEnter = (itemId: number) => {
    setActiveItem(itemId);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const handleCatalogBtnClick = () => {
    dispatch(toggleCatalogPopup());
  };
  return (
    <div className={styles.root}>
      <div className={classNames(styles.wrapper, "container")}>
        <div
          className={classNames(
            styles.catalogBtnWrapper,
            isCatalogOpen && styles.isOpen,
          )}
          onClick={handleCatalogBtnClick}
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
          <ul className={styles.navList}>
            {navigationData.map(item => {
              const isActive = activeItem === item.id;
              return (
                <li
                  key={item.id}
                  className={classNames(styles.listItem)}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.route} className={styles.itemLink}>
                    <span>{item.title}</span>
                    {item.content && item.content?.length > 0 && (
                      <ArrowIcon secondary />
                    )}
                  </Link>
                  {item.content && item.content.length > 0 && (
                    <div
                      className={classNames(
                        styles.itemResult,
                        isActive && styles.isActive,
                      )}
                    >
                      <div className={styles.resultsBorder} />
                      <ul className={styles.resultsList}>
                        {item.content.map(result => {
                          return (
                            <ListItemLink
                              key={result.id}
                              href={result.route}
                              itemText={result.title}
                              customClassnames={{
                                root: styles.resultItem,
                                link: styles.resultLink,
                                text: styles.resultText,
                              }}
                            />
                          );
                        })}
                      </ul>
                    </div>
                  )}
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
