import { Dispatch, SetStateAction } from "react";

interface TabsProps {
  tabs: { title: string; svgIcon: string }[];
  showIcon?: boolean;
  activeTabIndex: number;
  setActiveTabIndex: Dispatch<SetStateAction<number>>;
  onTabClick?: () => void;
  main?: boolean;
}

export default TabsProps;
