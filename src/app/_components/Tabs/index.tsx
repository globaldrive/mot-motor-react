import classNames from "classnames";
import Image from "next/image";

import styles from "./tabs.module.scss";
import mockLocationIcon from "@/_assets/images/general/location.svg";
import TabsProps from "@/_components/Tabs/Tabs.interface";

const Tabs = ({
  tabs,
  activeTabIndex,
  setActiveTabIndex,
  onTabClick,
  showIcon,
  main,
}: TabsProps) => {
  const tabsClassname = classNames(styles.tabsContainer, {
    [styles.main]: main,
  });
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    onTabClick && onTabClick();
  };

  return (
    <div className={tabsClassname}>
      <div className={styles.tabsHeaders}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={classNames(
              styles.tabHeader,
              index === activeTabIndex ? styles.active : "",
            )}
            onClick={() => handleTabClick(index)}
          >
            {showIcon && tab.svgIcon && (
              <Image
                src={mockLocationIcon}
                alt="Иконка тега"
                width={26}
                height={26}
              />
            )}
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
