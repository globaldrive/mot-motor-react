import { Key } from "react";

interface listItemClassname {
  rootClassname?: string;
  linkClassname?: string;
  textClassname?: string;
  imgClassname?: string;
}

interface ListItemLinkProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href: string;
  itemText?: string;
  svgSrc?: string;
  showSvg?: boolean;
  key: Key | null | undefined;
  customClassnames?: listItemClassname;
}

export type { listItemClassname, ListItemLinkProps };
