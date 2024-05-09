import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import LogoPng from "@/_assets/images/general/logo.png";
import Basket from "@/_components/Basket";
import Burger from "@/_components/Burger";
import Button from "@/_components/Button";
import CityPicker from "@/_components/CityPicker";
import Communication from "@/_components/Communication";
import styles from "@/_components/Header/UserInteraction/userInteraction.module.scss";
import ArrowIcon from "@/_components/Icons/Arrow";
import Search from "@/_components/Search";
import communicationDetails from "@/_data/communication/communication.json";
import RoutesPaths from "@/types/enums/routes";

const UserInteraction = () => {
  return (
    <div className={classNames(styles.root, "container")}>
      <div className={styles.logoMobileWrapper}>
        <Link href={RoutesPaths.home} className={styles.logoLink}>
          <Image
            className={styles.logoImg}
            src={LogoPng}
            alt="Лого компании"
            width={177}
            height={34}
          />
        </Link>
        <CityPicker />
      </div>

      <Search searchClassname={styles.search} />

      <div className={styles.communicationWrapper}>
        <div className={styles.availableDetails}>
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
        <div className={styles.fastActionBtns}>
          <div className={styles.fastCallBtn}>
            <Communication
              phoneNumber={communicationDetails.mainNumber}
              communicationType={{ phoneCall: true }}
              showIcon
            />
          </div>
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
      <Burger />
    </div>
  );
};

export default UserInteraction;
