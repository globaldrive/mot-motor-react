import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "@/_components/Button/button.module.scss";
import { ListItemLinkProps } from "@/_components/ListWithLinks/ListItemLink/ListItemLink.interface";

const ListWithLinks = ({
  href,
  itemText,
  svgSrc,
  showSvg,
  children,
  key,
  customClassnames,
}: ListItemLinkProps) => {
  const rootClassname = classNames(
    styles.item,
    customClassnames?.rootClassname,
  );
  const linkClassname = classNames(
    styles.link,
    customClassnames?.linkClassname,
  );
  const textClassname = classNames(
    styles.text,
    customClassnames?.textClassname,
  );
  const imgClassname = classNames(styles.img, customClassnames?.imgClassname);
  return (
    <li className={rootClassname} key={key}>
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

export default ListWithLinks;
