"use client";

import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import styles from "./modalOverlay.module.scss";
import CrossSvg from "@/_components/Icons/Cross";
import ModalOverlayProps from "@/_components/ModalOverlay/ModalOverylay.interface";
import useScrollControl from "@/_hooks/useScrollControl";
import {
  toggleCallbackWindow,
  toggleCityWindow,
  toggleModalOverlay,
} from "@/_store/slices/ModalWindows";
import { RootState } from "@/_store/store";

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  const dispatch = useDispatch();

  const { isModalOverlayOpen, showCallback, showCitySearch } = useSelector(
    (state: RootState) => state.modalWindows,
  );
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModalOverlay());
      switch (true) {
        case showCallback:
          dispatch(toggleCallbackWindow());
          break;
        case showCitySearch:
          dispatch(toggleCityWindow());
          break;
        default:
          break;
      }
    }
  };

  const handleCrossClick = () => {
    dispatch(toggleModalOverlay());
    switch (true) {
      case showCallback:
        dispatch(toggleCallbackWindow());
        break;
      case showCitySearch:
        dispatch(toggleCityWindow());
        break;
      default:
        break;
    }
  };

  useScrollControl({ isDisabled: isModalOverlayOpen });

  return (
    <>
      {isModalOverlayOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={classNames(styles.popup)}>
            {children} <CrossSvg main onClick={handleCrossClick} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalOverlay;
