import Image from "next/image";

import styles from "./communication.module.scss";
import phoneCallIcon from "@/_assets/images/general/phone.svg";
import WhatsAppIcon from "@/_assets/images/general/whatsApp.svg";
import CommunicationProps from "@/_components/Communication/Communication.interface";
import formatPhoneNumber from "@/_utils/formatPhoneNumber";

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
        {showPhoneNumber && formatPhoneNumber(phoneNumber)}
        {showIcon && communicationType?.whatsApp && (
          <Image
            className={styles.svgIcon}
            src={WhatsAppIcon}
            alt="Иконка вотс апп"
            width={36}
            height={36}
          />
        )}
        {showIcon && communicationType?.phoneCall && (
          <Image
            src={phoneCallIcon}
            alt="иконка телефона"
            width={30}
            height={30}
          />
        )}
        {children}
      </a>
    </div>
  );
};

export default Communication;
