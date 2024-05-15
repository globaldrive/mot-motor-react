import { catalogMenuItem } from "@/types/intefaces/catalogData";

interface PopupCatalogProps {
  catalogData: catalogMenuItem[];
  main?: boolean;
  showCatalogMenu?: boolean;
}

export default PopupCatalogProps;
