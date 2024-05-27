"use client";
import classNames from "classnames";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import styles from "./cityPicker.module.scss";
import locationSvg from "@/_assets/images/general/location.svg";
import CityPickerProps from "@/_components/CityPicker/CityPicker.interface";
import ArrowIcon from "@/_components/Icons/Arrow";
import {
  toggleCityWindow,
  toggleModalOverlay,
} from "@/_store/slices/ModalWindows";
import { RootState } from "@/_store/store";

const CityPicker = ({ className }: CityPickerProps) => {
  const dispatch = useDispatch();
  const userCity = useSelector((state: RootState) => state.userDetails.city);
  const rootClassname = classNames(styles.root, className && className);

  const handleBtnClick = () => {
    dispatch(toggleModalOverlay());
    dispatch(toggleCityWindow());
  };

  return (
    <button className={rootClassname} onClick={handleBtnClick}>
      <Image
        className={styles.svgIcon}
        src={locationSvg}
        alt="знак локации"
        width={16}
        height={20}
      />
      <div className={styles.text}>{userCity}</div>
      <ArrowIcon main />
    </button>
  );
};

export default CityPicker;
