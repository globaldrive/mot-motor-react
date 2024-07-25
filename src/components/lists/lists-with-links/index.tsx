import ListItemLink from "./list-item-link";
import ListWithLinksProps from "./ListWithLinks.interface";
import ArrowIcon from "../../icons/arrow";

const ListWithLinks = ({
  menuData,
  showArrow,
  showSvg,
  listClassname,
  itemClassnames,
  arrowProps,
  activeListItemInx,
  setIsActiveListItemInx,
  onItemClick,
}: ListWithLinksProps) => {
  return (
    <ul className={listClassname}>
      {menuData &&
        menuData.map((item, index) => {
          return (
            <ListItemLink
              key={item.id}
              href={item.route}
              itemText={item.title}
              svgSrc={item.svg}
              customClassnames={itemClassnames}
              showSvg={showSvg}
              itemInx={index}
              activeItemInx={activeListItemInx}
              setActiveInx={setIsActiveListItemInx}
              onItemClick={onItemClick}
            >
              {showArrow && item.content && item.content?.length > 0 && (
                <ArrowIcon
                  main={arrowProps?.main}
                  secondary={arrowProps?.secondary}
                  flip={arrowProps?.flip}
                  right={arrowProps?.right}
                  customClassname={arrowProps?.customClassname}
                />
              )}
            </ListItemLink>
          );
        })}
    </ul>
  );
};

export default ListWithLinks;
