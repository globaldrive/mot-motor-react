import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";

import styles from "./burgerMenu.module.scss";
import { toggleModalOverlay } from "../../_store/slices/ModalWindows";
import Burger from "@/_components/Burger";
import Button from "@/_components/Button";
import Communication from "@/_components/Communication";
import ArrowIcon from "@/_components/Icons/Arrow";
import ListItemLink from "@/_components/Lists/ListWithLinks/ListItemLink";
import communicationDetails from "@/_data/communication/communication.json";
import navigationData from "@/_data/navigation/navigation.json";
import useScrollControl from "@/_hooks/useScrollControl";
import { toggleBurgerMenu } from "@/_store/slices/BurgerMenu";
import { toggleCatalogPopup } from "@/_store/slices/Catalogs";
import { RootState } from "@/_store/store";

const BurgerMenu = () => {
  const [showResults, setShowResults] = useState(false);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const showBurgerMenu = useSelector(
    (state: RootState) => state.burgerMenu.isBurgerMenuOpen,
  );
  useScrollControl({ isDisabled: showBurgerMenu });

  const handleCatalogBtnClick = () => {
    dispatch(toggleCatalogPopup());
  };

  const handleCallBackBtnClick = () => {
    dispatch(toggleBurgerMenu());
    dispatch(toggleModalOverlay());
  };

  const handleBackResultBtn = () => {
    setShowResults(false);
  };

  return (
    <div
      className={classNames(
        styles.root,
        showBurgerMenu && styles.showBurgerMenu,
      )}
    >
      <div className={styles.burgerMenu}>
        <div className={styles.catalogBtnWrapper}>
          <Button catalogBurgerMenu onClick={handleCatalogBtnClick}>
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
        <div className={styles.navWrapper}>
          <SimpleBar className={styles.simpleBar}>
            <ul className={styles.navList}>
              {navigationData.map(item => {
                const handleNavItemClick = (
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                  activeTab: number,
                ) => {
                  if (item.content && item.content.length > 0) {
                    e.preventDefault();
                    setShowResults(true);
                    setActiveTab(activeTab);
                  } else {
                  }
                };
                return (
                  <li key={item.id} className={classNames(styles.listItem)}>
                    <Link
                      href={item.route}
                      className={styles.itemLink}
                      onClick={e => handleNavItemClick(e, item.id)}
                    >
                      <span>{item.title}</span>
                      {item.content && item.content?.length > 0 && (
                        <ArrowIcon main right />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SimpleBar>
        </div>
        <div className={styles.availabilityWrapper}>
          <div className={styles.communicationWrapper}>
            <div>
              <div className={styles.phoneWrapper}>
                <Communication
                  phoneNumber={communicationDetails.mainNumber}
                  communicationType={{ phoneCall: true }}
                  showPhoneNumber
                  phoneClassname={styles.phoneNumber}
                />
                <ArrowIcon main />
              </div>
              <div className={styles.weAreOnline}>
                <div className={styles.outsideRing}>
                  <div className={styles.insideRing}></div>
                </div>
                <div className={styles.weOnlineText}>Мы сейчас на связи</div>
              </div>
            </div>
            <Communication
              phoneNumber={communicationDetails.whatsApp.number}
              communicationType={{ whatsApp: true }}
              showIcon
              whatsAppPreviewText={communicationDetails.whatsApp.text}
              openInNewTab
            />
          </div>
          <div className={styles.callBackBtn} onClick={handleCallBackBtnClick}>
            <Button secondary>Бесплатный звонок</Button>
          </div>
        </div>
        {showResults && (
          <div className={styles.navResults}>
            {navigationData.map(item => {
              const isActiveItem = item.id === activeTab;
              return (
                <>
                  {isActiveItem && (
                    <div className={classNames(styles.itemResult)}>
                      <div
                        className={styles.resultBackBtn}
                        onClick={handleBackResultBtn}
                      >
                        <ArrowIcon left main />
                        <h3 className={styles.backBtnTitle}>{item.title}</h3>
                      </div>
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
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
