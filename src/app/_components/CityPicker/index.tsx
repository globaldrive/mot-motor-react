"use client";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./cityPicker.module.scss";
import locationSvg from "@/_assets/images/general/location.svg";
import ArrowIcon from "@/_components/Icons/Arrow";
import { RootState } from "@/_store/store";

const CityPicker = () => {
  const userCity = useSelector((state: RootState) => state.userDetails.city);
  const [isClicked, setIsClicked] = useState(false);

  const handleBtnClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button className={styles.root} onClick={handleBtnClick}>
      <Image src={locationSvg} alt="знак локации" width={16} height={20} />
      <div className={styles.text}>{userCity}</div>
      <ArrowIcon main flip={isClicked} />
    </button>
  );
};

export default CityPicker;
