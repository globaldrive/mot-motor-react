import { Dispatch } from "react";

import { listItemClassname } from "./ListItemLink.interface";
import { ArrowIconProps } from "../../icons/arrow-icon";
import { catalogMenuItem } from "@/_types/intefaces/catalog-data";

interface ListWithLinksProps extends React.HTMLAttributes<HTMLUListElement> {
  menuData: catalogMenuItem[];
  showArrow?: boolean;
  showSvg?: boolean;
  listClassname?: string;
  itemClassnames?: listItemClassname;
  arrowProps?: ArrowIconProps;
  activeListItemInx?: number;
  setIsActiveListItemInx?: Dispatch<number | undefined>;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default ListWithLinksProps;
