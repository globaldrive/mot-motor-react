import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import { ListItemLinkProps } from "./ListItemLink.interface";
// import styles from "./listItemLink.module.scss";

const ListItemLink = ({
  href,
  itemText,
  svgSrc,
  showSvg,
  children,
  customClassnames,
  activeItemInx,
  setActiveInx,
  itemInx,
  onItemClick,
}: ListItemLinkProps) => {
  const handleItemMouseEnter = () => {
    if (setActiveInx) {
      setActiveInx(itemInx);
    }
  };
  const isActive = itemInx === activeItemInx;

  const rootClassname = classNames(
    customClassnames?.root,
    isActive && customClassnames?.activeItem,
  );

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (onItemClick) {
      onItemClick(e);
    }
  };

  return (
    <li className={rootClassname} onMouseEnter={handleItemMouseEnter}>
      <Link
        className={customClassnames?.link}
        href={href}
        onClick={e => handleItemClick(e)}
      >
        {svgSrc && showSvg && (
          <Image
            className={customClassnames?.img}
            src={svgSrc}
            alt="Иконка пункта"
            width={22}
            height={22}
          />
        )}
        {itemText && <span className={customClassnames?.text}>{itemText}</span>}
        {children}
      </Link>
    </li>
  );
};

export default ListItemLink;
