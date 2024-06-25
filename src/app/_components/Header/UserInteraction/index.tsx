"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import LogoPng from "@/_assets/images/general/logo.png";
import Basket from "@/_components/Basket";
import Burger from "@/_components/Burger";
import CityPicker from "@/_components/CityPicker";
import CitySearch from "@/_components/CityPicker/CitySearch";
import Communication from "@/_components/Communication";
import styles from "@/_components/Header/UserInteraction/userInteraction.module.scss";
import ArrowIcon from "@/_components/Icons/Arrow";
import ModalWindows from "@/_components/ModalWindows";
import Search from "@/_components/Search";
import { Button } from "@/_components/ui/button";
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
    <div className="container">
      <div className="flex items-center mb-3 pt-3 gap-2 md:justify-between md:pt-5 md:gap-4 md:mb-0">
        <div className="flex flex-col gap-2 md:gap-0 mr-auto md:mr-0">
          <Link
            href={RoutesPaths.home}
            className="flex items-center select-none"
          >
            <Image
              className="md:w-44 md:h-8"
              src={LogoPng}
              alt="Лого компании"
              width={137}
              height={26}
            />
          </Link>
          <CityPicker className={styles.cityPickerMobile} />
        </div>

        <Search searchClassname={styles.search} />

        <div className="flex items-center gap-2.5 md:gap-5">
          <div className="hidden md:block">
            <div className="flex gap-1.5 items-center mb-1.5">
              <Communication
                phoneNumber={communicationDetails.mainNumber}
                communicationType={{ phoneCall: true }}
                showPhoneNumber
                variant="default"
              />
              <ArrowIcon main />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-2 h-2 bg-mm-grass rounded-full">
                <div className="w-1 h-1 rounded-full bg-mm-leaf"></div>
              </div>
              <div className="text-xs font-medium select-none whitespace-nowrap">
                Мы сейчас на связи
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:flex-none md:items-start md:gap-0">
            <div className="md:hidden">
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
        <div className="hidden md:flex" onClick={handleCallBackBtnClick}>
          <Button>Бесплатный звонок</Button>
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
    </div>
  );
};

export default UserInteraction;
