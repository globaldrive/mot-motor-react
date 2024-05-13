import styles from "@/_components/Header/CategoryOffersMenu/categoryOffersMenu.module.scss";
import ListWithLinks from "@/_components/ListWithLinks";
import categoryMenuListData from "@/_data/catalogHeader/catalogHeader.json";

const CategoryOffersMenu = ({
  showArrow,
  showSvg,
}: CategoryOffersMenuProps) => {
  return (
    <div className={styles.categoryWrapper}>
      <ListWithLinks
        menuData={categoryMenuListData}
        showArrow={showArrow && showArrow}
        showSvg={showSvg}
        listClassname={styles.categoryList}
        itemClassnames={{
          imgClassname: styles.itemSvg,
          textClassname: styles.itemText,
          linkClassname: styles.itemLink,
        }}
        arrowProps={{ main: true, right: true }}
      />
    </div>
  );
};

export default CategoryOffersMenu;
