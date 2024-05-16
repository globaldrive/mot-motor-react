import { Dispatch, SetStateAction } from "react";

interface NavigationProps {
  isCatalogOpen?: boolean;
  setIsCatalogOpen?: Dispatch<SetStateAction<boolean>>;
}

export default NavigationProps;
