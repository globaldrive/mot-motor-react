import Image from "next/image";

import WhatsAppIcon from "@/_assets/images/general/whatsApp.svg";
import CommunicationProps from "@/_components/Communication/Communication.interface";

const Communication = ({
  phoneNumber,
  showPhoneNumber,
  showWhatsAppIcon
}: CommunicationProps) => {
  return (
    <div>
      <a href={"tel:" + phoneNumber}>
        {showPhoneNumber && phoneNumber}
        {showWhatsAppIcon && (
          <Image
            src={WhatsAppIcon}
            alt="Иконка вотс апп"
            width={36}
            height={36}
          />
        )}
      </a>
    </div>
  );
};

export default Communication;
