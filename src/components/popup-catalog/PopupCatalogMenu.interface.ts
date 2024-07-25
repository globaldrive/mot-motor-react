import { Dispatch, SetStateAction } from "react";

import { catalogMenuItem } from "@/_types/intefaces/catalog-data";

interface PopupCatalogMenuProps {
  categoryData: catalogMenuItem[];
  showArrow?: boolean;
  showSvg?: boolean;
  activeMenuIdx?: number;
  setActiveMenuInx?: Dispatch<SetStateAction<number | undefined>>;
}

export default PopupCatalogMenuProps;
