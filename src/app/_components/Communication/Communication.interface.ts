interface communicationProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  phoneNumber: string;
  showPhoneNumber?: boolean;
  showWhatsAppIcon?: boolean;
}

export default communicationProps;
