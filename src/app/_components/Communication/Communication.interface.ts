interface communicationProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  phoneNumber: string;
  showPhoneNumber?: boolean;
  showIcon?: boolean;
  phoneClassname?: string;
  communicationType?: {
    phoneCall?: boolean;
    whatsApp?: boolean;
  };
  whatsAppPreviewText?: string;
  openInNewTab?: boolean;
}

export default communicationProps;
