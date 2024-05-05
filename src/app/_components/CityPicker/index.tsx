"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

import locationSvg from "@/_assets/images/general/location.svg";
import ArrowIcon from "@/_components/Icons/Arrow";
import { RootState } from "@/_store/store";

const CityPicker = () => {
  const userCity = useSelector((state: RootState) => state.userDetails.city);
  return (
    <button>
      <Image src={locationSvg} alt="знак локации" width={16} height={20} />
      <div>{userCity}</div>
      <ArrowIcon />
    </button>
  );
};

export default CityPicker;
