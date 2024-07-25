import { Dispatch } from "react";

import { listItemClassname } from "./ListItemLink.interface";
import { catalogMenuItem } from "../../../app/_types/intefaces/catalog-data";
import ArrowIconProps from "../../icons/arrow/Arrow.interface";

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
