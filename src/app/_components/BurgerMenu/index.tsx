import classNames from "classnames";
import Link from "next/link";
import { useSelector } from "react-redux";

import styles from "./burgerMenu.module.scss";
import Burger from "@/_components/Burger";
import Button from "@/_components/Button";
import ArrowIcon from "@/_components/Icons/Arrow";
import ListItemLink from "@/_components/Lists/ListWithLinks/ListItemLink";
import navigationData from "@/_data/navigation/navigation.json";
import { RootState } from "@/_store/store";

const BurgerMenu = () => {
  const showBurgerMenu = useSelector(
    (state: RootState) => state.burgerMenu.isBurgerMenuOpen,
  );
  return (
    <div
      className={classNames(
        styles.root,
        showBurgerMenu && styles.showBurgerMenu,
      )}
    >
      <div className={styles.burgerMenu}>
        <div className={styles.catalogBtnWrapper}>
          <Button catalogBurgerMenu>
            <div className={styles.burgerWrapper}>
              <Burger catalog isBurgerOpen={false} />
            </div>
            <span className={styles.catalogText}>Каталог</span>
            <ArrowIcon
              secondary
              customClassname={styles.catalogBtnArrow}
              right
            />
          </Button>
        </div>
        {navigationData.map(item => {
          return (
            <li key={item.id} className={classNames(styles.listItem)}>
              <Link href={item.route} className={styles.itemLink}>
                <span>{item.title}</span>
                {item.content && item.content?.length > 0 && (
                  <ArrowIcon secondary />
                )}
              </Link>
              {item.content && item.content.length > 0 && (
                <div className={classNames(styles.itemResult)}>
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
      </div>
    </div>
  );
};

export default BurgerMenu;
