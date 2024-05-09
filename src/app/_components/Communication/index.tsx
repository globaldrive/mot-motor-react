import Image from "next/image";

import styles from "./communication.module.scss";
import WhatsAppIcon from "@/_assets/images/general/whatsApp.svg";
import CommunicationProps from "@/_components/Communication/Communication.interface";

const Communication = ({
  phoneNumber,
  showPhoneNumber,
  showIcon,
  children,
  phoneClassname,
  communicationType,
  openInNewTab,
  whatsAppPreviewText,
}: CommunicationProps) => {
  let href = "tel:";
  if (communicationType?.whatsApp) {
    href = `https://wa.clck.bar/${phoneNumber}?text=${whatsAppPreviewText}`;
  }

  return (
    <div>
      <a
        className={phoneClassname}
        href={href + phoneNumber}
        target={(openInNewTab && "_blank") || ""}
      >
        {showPhoneNumber && phoneNumber}
        {showIcon && communicationType?.whatsApp && (
          <Image
            className={styles.svgIcon}
            src={WhatsAppIcon}
            alt="Иконка вотс апп"
            width={36}
            height={36}
          />
        )}
        {children}
      </a>
    </div>
  );
};

export default Communication;
