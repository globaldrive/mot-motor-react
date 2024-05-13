import ArrowIconProps from "@/_components/Icons/Arrow/Arrow.interface";
import { listItemClassname } from "@/_components/ListWithLinks/ListItemLink/ListItemLink.interface";
import { catalogMenuItem } from "@/types/intefaces/catalogData";

interface ListWithLinksProps extends React.HTMLAttributes<HTMLUListElement> {
  menuData: catalogMenuItem[];
  showArrow?: boolean;
  showSvg?: boolean;
  listClassname?: string;
  itemClassnames?: listItemClassname;
  arrowProps?: ArrowIconProps;
}

export default ListWithLinksProps;
