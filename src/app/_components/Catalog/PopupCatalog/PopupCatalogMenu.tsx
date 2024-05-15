import ListWithLinks from "../../Lists/ListWithLinks";
import PopupCatalogMenuProps from "@/_components/Catalog/PopupCatalog/PopupCatalogMenu.interface";
import styles from "@/_components/Catalog/PopupCatalog/popupCatalogMenu.module.scss";

const PopupCatalogMenu = ({
  categoryData,
  showArrow,
  showSvg,
  activeMenuIdx,
  setActiveMenuInx,
}: PopupCatalogMenuProps) => {
  return (
    <div className={styles.categoryWrapper}>
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
    </div>
  );
};

export default PopupCatalogMenu;
