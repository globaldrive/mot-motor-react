import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import LogoPng from "@/_assets/images/general/logo.png";
import Basket from "@/_components/Basket";
import Button from "@/_components/Button";
import Communication from "@/_components/Communication";
import styles from "@/_components/Header/UserInteraction/userInteraction.module.scss";
import ArrowIcon from "@/_components/Icons/Arrow";
import Search from "@/_components/Search";
import communicationDetails from "@/_data/communication/communication.json";
import RoutesPaths from "@/types/enums/routes";

const UserInteraction = () => {
  return (
    <div className={classNames(styles.root, "container")}>
      <Link href={RoutesPaths.home} className={styles.logoWrapper}>
        <Image src={LogoPng} alt="Лого компании" width={177} height={34} />
      </Link>
      <Search />
      <div className={styles.communicationWrapper}>
        <div>
          <div className={styles.phoneWrapper}>
            <Communication
              phoneNumber={communicationDetails.mainNumber}
              communicationType={{ phoneCall: true }}
              showPhoneNumber
              phoneClassname={styles.phoneNumber}
            />
            <ArrowIcon main />
          </div>
          <div className={styles.weAreOnline}>
            <div className={styles.outsideRing}>
              <div className={styles.insideRing}></div>
            </div>
            <div className={styles.weOnlineText}>Мы сейчас на связи</div>
          </div>
        </div>
        <div>
          <Communication
            phoneNumber={communicationDetails.whatsApp.number}
            communicationType={{ whatsApp: true }}
            showIcon
            whatsAppPreviewText={communicationDetails.whatsApp.text}
            openInNewTab
          />
        </div>
      </div>
      <div className={styles.callBackBtn}>
        <Button secondary>Бесплатный звонок</Button>
      </div>
      <Basket />
    </div>
  );
};

export default UserInteraction;
