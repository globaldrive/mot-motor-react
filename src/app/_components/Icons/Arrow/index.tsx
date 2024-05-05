import styles from "./arrow.module.scss";

const ArrowIcon = () => {
  return (
    <div className={styles.root}>
      <span className={styles.firstLine}></span>
      <span className={styles.secondtLine}></span>
    </div>
  );
};

export default ArrowIcon;
