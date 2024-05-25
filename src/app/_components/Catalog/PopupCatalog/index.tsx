"use client";
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./popupCatalog.module.scss";
import PopupCatalogProps from "@/_components/Catalog/PopupCatalog/PopupCatalog.interface";
import PopupCatalogMenu from "@/_components/Catalog/PopupCatalog/PopupCatalogMenu";
import PopupCatalogResults from "@/_components/Catalog/PopupCatalog/PopupCatalogResults";
import { RootState } from "@/_store/store";

const PopupCatalog = ({ catalogData, main }: PopupCatalogProps) => {
  const showCatalogMenu = useSelector(
    (state: RootState) => state.catalogPopup.isCatalogPopupOpen,
  );
  const [menuItemActive, setMenuItemActive] = useState<number | undefined>(
    undefined,
  );
  const popupMenuClassname = classNames(
    styles.popupMenu,
    (showCatalogMenu && styles.showCatalogMenu) || styles.hideCatalogMenu,
    "container",
  );

  const menuWrapperClassname = classNames(styles.catalogWrapper, {
    [styles.main]: main,
  });
  const onMouseLeavePopupMenu = () => {
    setMenuItemActive(undefined);
  };
  return (
    <div className={popupMenuClassname} onMouseLeave={onMouseLeavePopupMenu}>
      <div className={menuWrapperClassname}>
        <PopupCatalogMenu
          categoryData={catalogData}
          showSvg
          showArrow
          activeMenuIdx={menuItemActive}
          setActiveMenuInx={setMenuItemActive}
        />
        <PopupCatalogResults
          resultsData={catalogData}
          activeResultInx={menuItemActive}
          setActiveResultInx={setMenuItemActive}
        />
      </div>
    </div>
  );
};

export default PopupCatalog;
