import classNames from "classnames";
import Link from "next/link";

import styles from "./navigation.module.scss";
import Button from "@/_components/Button";
import ArrowIcon from "@/_components/Icons/Arrow";
import navigationData from "@/_data/navigation/navigation.json";

const Navigation = () => {
  return (
    <div className={styles.root}>
      <div className={classNames(styles.wrapper, "container")}>
        <div className={styles.catalogBtnWrapper}>
          <Button>Каталог</Button>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {navigationData.map(item => {
              return (
                <li key={item.id}>
                  <Link className={styles.itemLink} href={item.route}>
                    <span>{item.title}</span>
                    {item.content.length > 0 && <ArrowIcon secondary />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
