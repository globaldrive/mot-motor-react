interface BurgerProps extends React.HTMLAttributes<HTMLDivElement> {
  isBurgerOpen?: boolean;
  onBurgerClick?: () => void;
  mobile?: boolean;
  catalog?: boolean;
  asideMenu?: boolean;
}

export default BurgerProps;
