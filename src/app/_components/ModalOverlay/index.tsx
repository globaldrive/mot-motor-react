"use client";

import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import styles from "./modalOverlay.module.scss";
import CrossSvg from "@/_components/Icons/Cross";
import ModalOverlayProps from "@/_components/ModalOverlay/ModalOverylay.interface";
import useScrollControl from "@/_hooks/useScrollControl";
import { toggleModalOverlay } from "@/_store/slices/ModalOverlay";
import { RootState } from "@/_store/store";

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  const dispatch = useDispatch();

  const { isModalOverlayOpen } = useSelector(
    (state: RootState) => state.modalOverlay,
  );
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModalOverlay());
    }
  };
  const handleCrossClick = () => {
    dispatch(toggleModalOverlay());
  };

  useScrollControl({ isDisabled: isModalOverlayOpen });

  return (
    <>
      {isModalOverlayOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={classNames(styles.popup)}>
            {children} <CrossSvg onClick={handleCrossClick} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalOverlay;
