import classNames from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./popupCatalogResults.module.scss";
import PopupCatalogResultsProps from "@/_components/Catalog/PopupCatalog/PopupCatalogResults.interface";

const PopupCatalogResults = ({
  resultsData,
  activeResultInx,
}: PopupCatalogResultsProps) => {
  return (
    <div className={styles.root}>
      {resultsData &&
        resultsData.map((item, index) => {
          const isActive = index === activeResultInx;
          const listItemClass = classNames(
            styles.list,
            isActive ? styles.activeList : "",
          );
          return (
            <React.Fragment key={item.id}>
              {item.content?.length !== 0 && (
                <ul className={listItemClass}>
                  {item.content &&
                    item.content.map(content => {
                      const { id, title, route } = content;
                      return (
                        <li key={id}>
                          <Link href={route}>{title}</Link>
                        </li>
                      );
                    })}
                </ul>
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default PopupCatalogResults;
