import { Dispatch } from "react";

interface listItemClassname {
  root?: string;
  link?: string;
  text?: string;
  img?: string;
  activeItem?: string;
}

interface ListItemLinkProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
  activeItemInx?: number;
  setActiveInx?: Dispatch<number | undefined>;
  href: string;
  itemText?: string;
  svgSrc?: string;
  showSvg?: boolean;
  customClassnames?: listItemClassname;
  itemInx?: number;
}

export type { listItemClassname, ListItemLinkProps };
