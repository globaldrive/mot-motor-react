import classNames from "classnames";
import Link from "next/link";
import React from "react";
import SimpleBar from "simplebar-react";

import styles from "./popupCatalogResults.module.scss";
import PopupCatalogResultsProps from "@/_components/Catalog/PopupCatalog/PopupCatalogResults.interface";

const PopupCatalogResults = ({
  resultsData,
  activeResultInx,
}: PopupCatalogResultsProps) => {
  const isSomethingInResults =
    activeResultInx !== undefined &&
    resultsData &&
    resultsData[activeResultInx] &&
    resultsData[activeResultInx].content &&
    resultsData[activeResultInx].content!.length > 0;
  const resultsClassname = classNames(
    styles.root,
    isSomethingInResults && styles.showResults,
  );
  return (
    <div className={resultsClassname}>
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
                <SimpleBar className={styles.simpleBar}>
                  <ul className={listItemClass}>
                    {item.content &&
                      item.content.map(content => {
                        const { id, title, route } = content;
                        return (
                          <li key={id} className={styles.listItem}>
                            <Link href={route}>{title}</Link>
                          </li>
                        );
                      })}
                  </ul>
                </SimpleBar>
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default PopupCatalogResults;
