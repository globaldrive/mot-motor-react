import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";

import styles from "./citySearch.module.scss";
import locationSvg from "@/_assets/images/general/location.svg";
import InputField from "@/_components/InputField";
import ModalOverlay from "@/_components/ModalOverlay";
import ModalPortal from "@/_components/ModalPortal";
import {
  toggleCityWindow,
  toggleModalOverlay,
} from "@/_store/slices/ModalWindows";
import { changeUserCity } from "@/_store/slices/UserDetails";

const CitySearch = () => {
  const dispatch = useDispatch();
  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Челябинск",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCityClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    dispatch(changeUserCity(e.currentTarget.innerText));
    dispatch(toggleModalOverlay());
    dispatch(toggleCityWindow());
  };

  return (
    <ModalPortal>
      <ModalOverlay>
        <div className={styles.root}>
          <Image
            className={styles.svgIcon}
            src={locationSvg}
            alt="знак локации"
            width={100}
            height={100}
          />
          <h3 className={styles.title}>Выберите город</h3>
          <InputField
            type="text"
            placeholder="Введите название города"
            value={searchTerm}
            onChange={e => handleInputChange(e)}
            main
          />
          <div className={styles.text}>
            Введите не менее 3 символов и выберите из списка ниже:
          </div>
          <div className={styles.listWrapper}>
            <SimpleBar className={styles.simpleBar}>
              <ul className={styles.list}>
                {cities
                  .filter(city =>
                    city.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((city, index) => (
                    <li
                      className={styles.item}
                      key={index}
                      onClick={e => handleCityClick(e)}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            </SimpleBar>
          </div>
        </div>
      </ModalOverlay>
    </ModalPortal>
  );
};

export default CitySearch;
