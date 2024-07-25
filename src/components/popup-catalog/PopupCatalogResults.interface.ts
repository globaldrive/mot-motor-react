import { Dispatch, SetStateAction } from "react";

import { catalogMenuItem } from "@/_types/intefaces/catalog-data";

interface PopupCatalogResultsProps {
  resultsData: catalogMenuItem[];
  activeResultInx?: number;
  setActiveResultInx?: Dispatch<SetStateAction<number | undefined>>;
}

export default PopupCatalogResultsProps;
