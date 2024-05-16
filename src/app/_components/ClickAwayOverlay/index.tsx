import styles from "./clickAwayOverlay.module.scss";
import ClickAwayOverlayProps from "@/_components/ClickAwayOverlay/ClickAwayOverlay.interface";

const ClickAwayOverlay = ({ children }: ClickAwayOverlayProps) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default ClickAwayOverlay;
