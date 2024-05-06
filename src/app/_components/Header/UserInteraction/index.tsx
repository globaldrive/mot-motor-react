import Image from "next/image";

import LogoPng from "@/_assets/images/general/logo.png";
import Basket from "@/_components/Basket";
import Button from "@/_components/Button";
import Communication from "@/_components/Communication";
import styles from "@/_components/Header/UserInteraction/userInteraction.module.scss";
import ArrowIcon from "@/_components/Icons/Arrow";
import Search from "@/_components/Search";
import communicationDetails from "@/_data/communication/communication.json";

const UserInteraction = () => {
  return (
    <div className={styles.root}>
      <Image src={LogoPng} alt="Лого компании" width={177} height={34} />
      <Search />
      <div>
        <div>
          <div>
            <Communication
              phoneNumber={communicationDetails.mainNumber}
              showPhoneNumber
            />
            <ArrowIcon main />
          </div>
          <div>
            <div>
              <div></div>
            </div>
            <div>Мы сейчас на связи</div>
          </div>
        </div>
        <div>
          <Communication
            phoneNumber={communicationDetails.mainNumber}
            showWhatsAppIcon
          />
        </div>
      </div>
      <Button>Бесплатный звонок</Button>
      <Basket />
    </div>
  );
};

export default UserInteraction;
