import Image from "next/image";
import Link from "next/link";

import CatalogMenuProps from "@/_components/Catalog/CatalogMenuList/CatalogMenuList.interface";
import ArrowIcon from "@/_components/Icons/Arrow";

const CatalogMenuList = ({ menuData, showArrow }: CatalogMenuProps) => {
  return (
    <ul>
      {menuData.map(item => {
        return (
          <li key={item.id}>
            <Link href={item.route}>
              {item.svg && (
                <Image
                  src={item.svg}
                  alt="Иконка пункта"
                  width={22}
                  height={22}
                />
              )}
              <span>{item.title}</span>
              {showArrow && item.content && item.content?.length > 0 && (
                <ArrowIcon main right />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CatalogMenuList;
