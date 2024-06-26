import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./navigation.module.scss";
import Burger from "@/_components/Burger";
import ArrowIcon from "@/_components/Icons/Arrow";
import ListItemLink from "@/_components/Lists/ListWithLinks/ListItemLink";
import Search from "@/_components/Search";
import { Button } from "@/_components/ui/button";
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
    <div className="bg-transparent py-1.5 text-base text-white md:bg-mm-main">
      <div className="flex gap-2 md:gap-5 lg:gap-12 container">
        <div
          className={classNames(
            styles.catalogBtnWrapper,
            isCatalogOpen && styles.isOpen,
          )}
          onClick={handleCatalogBtnClick}
        >
          <Button variant="catalog">
            <div className="m-0 md:mr-4 flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <Burger catalog isBurgerOpen={isCatalogOpen} />
            </div>
            <span className="hidden md:inline-block mr-auto">Каталог</span>
            <ArrowIcon
              secondary
              customClassname={styles.catalogBtnArrow}
              flip={isCatalogOpen}
            />
          </Button>
        </div>
        <nav className="hidden w-full md:block">
          <ul className="flex h-full justify-between items-center font-bold">
            {navigationData.map(item => {
              const isActive = activeItem === item.id;
              return (
                <li
                  key={item.id}
                  className="relative flex items-center h-full text-xs lg:text-base"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.route}
                    className="flex h-full gap-1.5 items-center select-none whitespace-nowrap"
                  >
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
                      <div className="h-1.5 bg-mm-main" />
                      <ul className="flex flex-col">
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
