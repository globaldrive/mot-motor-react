"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import LogoPng from "@/_assets/images/general/logo.png";
import Basket from "@/_components/Basket";
import Burger from "@/_components/Burger";
import Button from "@/_components/Button";
import CityPicker from "@/_components/CityPicker";
import CitySearch from "@/_components/CityPicker/CitySearch";
import Communication from "@/_components/Communication";
import styles from "@/_components/Header/UserInteraction/userInteraction.module.scss";
import ArrowIcon from "@/_components/Icons/Arrow";
import ModalWindows from "@/_components/ModalWindows";
import Search from "@/_components/Search";
import communicationDetails from "@/_data/communication/communication.json";
import { toggleBurgerMenu } from "@/_store/slices/BurgerMenu";
import {
  toggleCallbackWindow,
  toggleModalOverlay,
} from "@/_store/slices/ModalWindows";
import { RootState } from "@/_store/store";
import RoutesPaths from "@/types/enums/routes";

const UserInteraction = () => {
  const dispatch = useDispatch();
  const isBurgerOpen = useSelector(
    (state: RootState) => state.burgerMenu.isBurgerMenuOpen,
  );
  const showCityModal = useSelector(
    (state: RootState) => state.modalWindows.showCitySearch,
  );

  const handleBurgerClick = () => {
    dispatch(toggleBurgerMenu());
  };
  const handleCallBackBtnClick = () => {
    dispatch(toggleModalOverlay());
    dispatch(toggleCallbackWindow());
  };

  const { showCallback } = useSelector(
    (state: RootState) => state.modalWindows,
  );

  return (
    <div className={classNames(styles.root, "container")}>
      <div className={styles.logoMobileWrapper}>
        <Link href={RoutesPaths.home} className={styles.logoLink}>
          <Image
            className={styles.logoImg}
            src={LogoPng}
            alt="Лого компании"
            width={177}
            height={34}
          />
        </Link>
        <CityPicker className={styles.cityPickerMobile} />
      </div>

      <Search searchClassname={styles.search} />

      <div className={styles.communicationWrapper}>
        <div className={styles.availableDetails}>
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
        <div className={styles.fastActionBtns}>
          <div className={styles.fastCallBtn}>
            <Communication
              phoneNumber={communicationDetails.mainNumber}
              communicationType={{ phoneCall: true }}
              showIcon
            />
          </div>
          <Communication
            phoneNumber={communicationDetails.whatsApp.number}
            communicationType={{ whatsApp: true }}
            showIcon
            whatsAppPreviewText={communicationDetails.whatsApp.text}
            openInNewTab
          />
        </div>
      </div>
      <div className={styles.callBackBtn} onClick={handleCallBackBtnClick}>
        <Button secondary>Бесплатный звонок</Button>
      </div>
      {showCallback && <ModalWindows callback />}
      {showCityModal && <CitySearch />}
      <Basket />
      <Burger
        mobile
        isBurgerOpen={isBurgerOpen}
        onBurgerClick={handleBurgerClick}
      />
    </div>
  );
};

export default UserInteraction;
