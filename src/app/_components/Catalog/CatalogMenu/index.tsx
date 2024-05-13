import classNames from "classnames";

import styles from "@/_components/Catalog/CatalogMenu/catalogMenu.module.scss";
import ListWithLinks from "@/_components/ListWithLinks";
import catalogMenuListData from "@/_data/catalogHeader/catalogHeader.json";

const CatalogMenu = ({ showArrow, showSvg }: CatalogMenuProps) => {
  return (
    <div className={classNames(styles.catalogMenu, "container")}>
      <div className={styles.catalogMenuWrapper}>
        <ListWithLinks
          menuData={catalogMenuListData}
          showArrow={showArrow && showArrow}
          listClassname={styles.catalogList}
          itemClassnames={{
            rootClassname: styles.catalogItem,
            imgClassname: styles.itemSvg,
            textClassname: styles.itemText,
            linkClassname: styles.itemLink,
          }}
          arrowProps={{ main: true, right: true }}
        />
      </div>
    </div>
  );
};

export default CatalogMenu;
