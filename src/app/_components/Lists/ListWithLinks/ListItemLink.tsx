import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "@/_components/Button/button.module.scss";
import { ListItemLinkProps } from "@/_components/Lists/ListWithLinks/ListItemLink.interface";

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
}: ListItemLinkProps) => {
  const handleItemMouseEnter = () => {
    if (setActiveInx) {
      setActiveInx(itemInx);
    }
  };
  const isActive = itemInx === activeItemInx;

  const rootClassname = classNames(
    styles.item,
    customClassnames?.root,
    isActive && customClassnames?.activeItem,
  );
  const linkClassname = classNames(styles.link, customClassnames?.link);
  const textClassname = classNames(styles.text, customClassnames?.text);
  const imgClassname = classNames(styles.img, customClassnames?.img);

  return (
    <li className={rootClassname} onMouseEnter={handleItemMouseEnter}>
      <Link className={linkClassname} href={href}>
        {svgSrc && showSvg && (
          <Image
            className={imgClassname}
            src={svgSrc}
            alt="Иконка пункта"
            width={22}
            height={22}
          />
        )}
        {itemText && <span className={textClassname}>{itemText}</span>}
        {children}
      </Link>
    </li>
  );
};

export default ListItemLink;
