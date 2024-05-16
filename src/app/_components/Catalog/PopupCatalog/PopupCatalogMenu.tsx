import classNames from "classnames";
import SimpleBar from "simplebar-react";

import ListWithLinks from "../../Lists/ListWithLinks";
import PopupCatalogMenuProps from "@/_components/Catalog/PopupCatalog/PopupCatalogMenu.interface";
import styles from "@/_components/Catalog/PopupCatalog/popupCatalogMenu.module.scss";
import "simplebar-react/dist/simplebar.min.css";

const PopupCatalogMenu = ({
  categoryData,
  showArrow,
  showSvg,
  activeMenuIdx,
  setActiveMenuInx,
}: PopupCatalogMenuProps) => {
  const isSomethingInResults =
    activeMenuIdx !== undefined &&
    categoryData &&
    categoryData[activeMenuIdx] &&
    categoryData[activeMenuIdx].content &&
    categoryData[activeMenuIdx].content!.length > 0;
  const wrapperClassname = classNames(
    styles.categoryWrapper,
    isSomethingInResults && styles.withContent,
  );
  return (
    <div className={wrapperClassname}>
      <SimpleBar className={styles.simpleBar}>
        <ListWithLinks
          activeListItemInx={activeMenuIdx}
          setIsActiveListItemInx={setActiveMenuInx}
          menuData={categoryData}
          showArrow={showArrow && showArrow}
          showSvg={showSvg}
          listClassname={styles.categoryList}
          itemClassnames={{
            img: styles.itemSvg,
            text: styles.itemText,
            link: styles.itemLink,
            activeItem: styles.activeMenuItem,
          }}
          arrowProps={{
            main: true,
            right: true,
            customClassname: styles.arrowCategoryMenu,
          }}
        />
      </SimpleBar>
    </div>
  );
};

export default PopupCatalogMenu;
