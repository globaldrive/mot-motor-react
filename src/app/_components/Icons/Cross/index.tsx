import classNames from "classnames";

import styles from "./cross.module.scss";

interface CrossSvgProps {
  onClick: () => void;
}

const CrossSvg = ({ onClick }: CrossSvgProps) => {
  return (
    <svg
      className={classNames(styles.cross, styles.crossPosition)}
      onClick={onClick}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 7L7 21"
        stroke="#222831"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7L21 21"
        stroke="#222831"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossSvg;
