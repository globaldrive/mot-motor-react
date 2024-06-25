import { cva } from "class-variance-authority";
import Image from "next/image";

import phoneCallIcon from "@/_assets/images/general/phone.svg";
import WhatsAppIcon from "@/_assets/images/general/whatsApp.svg";
import CommunicationProps from "@/_components/Communication/Communication.interface";
import { cn } from "@/_utils/_utils";
import formatPhoneNumber from "@/_utils/formatPhoneNumber";

const Communication = ({
  className,
  phoneNumber,
  showPhoneNumber,
  showIcon,
  children,
  communicationType,
  openInNewTab,
  whatsAppPreviewText,
  variant,
}: CommunicationProps) => {
  const phoneNumberVariants = cva("", {
    variants: {
      variant: {
        default: "font-bold no-underline text-mm-primaryText text-base",
      },
    },
  });
  let href = "tel:";
  if (communicationType?.whatsApp) {
    href = `https://wa.clck.bar/${phoneNumber}?text=${whatsAppPreviewText}`;
  }

  return (
    <div>
      <a
        className={cn(phoneNumberVariants({ variant, className }))}
        href={href + phoneNumber}
        target={(openInNewTab && "_blank") || ""}
      >
        {showPhoneNumber && formatPhoneNumber(phoneNumber)}
        {showIcon && communicationType?.whatsApp && (
          <Image
            className="select-none"
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
