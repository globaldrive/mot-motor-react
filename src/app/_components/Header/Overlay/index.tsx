import { useDispatch, useSelector } from "react-redux";

import styles from "./overlay.module.scss";
import { toggleCatalogPopup } from "@/_store/slices/Catalogs";
import { RootState } from "@/_store/store";

const Overlay = () => {
  const dispatch = useDispatch();
  const isCatalogOpen = useSelector(
    (state: RootState) => state.catalogPopup.isCatalogPopupOpen,
  );
  const handleOverlayClick = () => {
    isCatalogOpen && dispatch(toggleCatalogPopup());
  };
  return (
    <>
      {isCatalogOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick} />
      )}
    </>
  );
};

export default Overlay;
