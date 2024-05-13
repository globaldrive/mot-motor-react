import ListItemLink from "./ListItemLink";
import ArrowIcon from "@/_components/Icons/Arrow";
import ListWithLinksProps from "@/_components/ListWithLinks/ListWithLinks.interface";

const ListWithLinks = ({
  menuData,
  showArrow,
  showSvg,
  listClassname,
  itemClassnames,
  arrowProps,
}: ListWithLinksProps) => {
  return (
    <ul className={listClassname}>
      {menuData.map(item => {
        return (
          <ListItemLink
            href={item.route}
            key={item.id}
            itemText={item.title}
            svgSrc={item.svg}
            customClassnames={itemClassnames}
            showSvg={showSvg}
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
