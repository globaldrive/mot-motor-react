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
  const onMouseLeavePopupMenu = () => {
    setMenuItemActive(undefined);
  };
  return (
    <div
      className={`container relative z-30 text-base border-t-2 border-mm-cement md:border-0 md:border-transparent ${(showCatalogMenu && "block") || "hidden"}`}
      onMouseLeave={onMouseLeavePopupMenu}
    >
      <div
        className={classNames(
          styles.popupMenuWrapper,
          menuItemActive !== undefined && styles.withContent,
          `flex left-0 sm:left-auto absolute z-10`,
        )}
      >
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
