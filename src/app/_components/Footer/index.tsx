"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";

import styles from "./footer.module.scss";
import EmailSvg from "@/_assets/images/general/email.svg";
import LogoPng from "@/_assets/images/general/logo.png";
import SentSvg from "@/_assets/images/general/sent.svg";
import CatalogPng from "@/_assets/images/pngs/catalog.png";
import ConsultantPng from "@/_assets/images/pngs/consultant.png";
import PaymentOptionsPng from "@/_assets/images/pngs/paymentOptions.png";
import PodvesnoyMotorPng from "@/_assets/images/pngs/plm.png";
import Arrow from "@/_components/Icons/Arrow";
import citiesData from "@/_data/cities/cities.json";
import footerNavData from "@/_data/navigation/footerNav.json";
import {
  toggleCallbackWindow,
  toggleModalOverlay,
} from "@/_store/slices/ModalWindows";

const Footer = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [messageHided, setIsHideMessage] = useState(true);
  const messageHidingDuration = 3000;
  const isProcessing = useRef(false);

  const handleButtonClick = (btnNumber: number) => {
    if (activeButton === btnNumber) {
      setActiveButton(null);
      return;
    }
    setActiveButton(btnNumber);
  };
  const handleSubmitForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    if (isProcessing.current) return;
    isProcessing.current = true;

    try {
      //Todo: Add real fetch response, open comments
      const response = true;

      // if (!response.ok) {
      //   throw new Error("Subscription response was not ok");
      // }
      // const result = await response.json();
      console.log("Success", response);
      setIsHideMessage(false);

      setTimeout(() => {
        setIsHideMessage(true);
        isProcessing.current = false;
      }, messageHidingDuration);
    } catch (error) {
      console.log(error, "Error during Subscription request");
      setIsHideMessage(true);
      isProcessing.current = false;
    }
  };

  const handleCallbackBtn = () => {
    dispatch(toggleModalOverlay());
    dispatch(toggleCallbackWindow());
  };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.mainContent}>
          <div className={styles.detailsInfo}>
            <Image src={LogoPng} alt="Логотип" width={177} height={34} />
            <div>
              <h4 className={styles.detailsTitle}>Фактический адрес</h4>
              <div className={styles.detailsSubtitle}>
                {citiesData[0].address}
              </div>
            </div>
            <div className={styles.schedule}>
              <h4 className={styles.detailsTitle}>Время работы</h4>
              <div className={styles.detailsSubtitle}>
                {citiesData[0].weekdayHours}
              </div>
              <div className={styles.detailsSubtitle}>
                {citiesData[0].weekendHours}
              </div>
            </div>
            <Image
              src={PaymentOptionsPng}
              alt="Способы оплаты"
              width={324}
              height={38}
            />
          </div>
          <div>
            <h3 className={styles.navTitle}>О компании</h3>
            <nav>
              <ul className={styles.navFooterList}>
                {footerNavData.map(item => {
                  return (
                    <li key={item.id}>
                      <Link className={styles.navLink} href={item.route}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className={styles.additionalInfo}>
            <div className={styles.callbackSection}>
              <Image
                src={ConsultantPng}
                alt="Консультант"
                width={75}
                height={105}
              />
              <div className={styles.callbackWrapper}>
                <div>
                  <h3 className={styles.callbackTitle}>Остались вопросы?</h3>
                  <button
                    className={styles.callbackBtn}
                    onClick={handleCallbackBtn}
                  >
                    Проконсультируем бесплатно!
                  </button>
                </div>
                <div>
                  <h4 className={styles.storePhoneTitle}>Телефон магазин</h4>
                  <a
                    className={styles.storePhone}
                    href={`tel:${citiesData[0].phoneNumber}`}
                  >
                    {citiesData[0].phoneNumber}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className={styles.subscribeTitle}>
                Будьте вкурсе последних скидок и новинок !
              </h3>
              <form className={styles.subscribeForm} action="">
                <input
                  className={styles.subscribeInput}
                  placeholder="Ваш E-mail"
                  type="text"
                />
                <Image
                  className={styles.subscriptionEmail}
                  src={EmailSvg}
                  alt="Иконка Email"
                  width={18}
                  height={14}
                />
                <button
                  className={styles.subscribeSentBtn}
                  type="submit"
                  onClick={e => handleSubmitForm(e)}
                >
                  <Image src={SentSvg} alt="Sent" width={18} height={16} />
                </button>
              </form>
              {!messageHided && <div>Спасибо за подписку!</div>}
            </div>
          </div>
        </div>
        <div className={styles.seoBlockWrapper}>
          <div className={styles.seoInfoBtnsWrapper}>
            <button
              className={classNames(
                styles.seoInfoBtn,
                activeButton === 1 && styles.activeBtn,
              )}
              onClick={() => handleButtonClick(1)}
            >
              <Image
                className={styles.seoBtnPic}
                src={CatalogPng}
                alt="Каталог"
                width={82}
                height={46}
              />
              <span className={styles.seoBtnTitle}>Каталог</span>
              <Arrow tertiary flip={activeButton === 1} />
            </button>
            <button
              className={classNames(
                styles.seoInfoBtn,
                activeButton === 2 && styles.activeBtn,
              )}
              onClick={() => handleButtonClick(2)}
            >
              <Image
                className={styles.seoBtnPic}
                src={PodvesnoyMotorPng}
                alt="Популярные бренды"
                width={48}
                height={48}
              />
              <span className={styles.seoBtnTitle}>Популярные бренды</span>{" "}
              <Arrow tertiary flip={activeButton === 2} />
            </button>
          </div>
          <div
            className={classNames(
              styles.seoRequests,
              activeButton !== null && styles.showSeo,
            )}
          >
            <SimpleBar className={styles.simpleBar}>
              <div className={styles.listsWrapper}>
                <ul
                  className={classNames(
                    styles.seoList,
                    activeButton === 1 && styles.activeList,
                  )}
                >
                  <li>
                    <Link className={styles.seoLink} href="#">
                      Result 1
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.seoLink} href="#">
                      Result 2
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.seoLink} href="#">
                      Result 3
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.seoLink} href="#">
                      Result 5
                    </Link>
                  </li>
                </ul>
                <ul
                  className={classNames(
                    styles.seoList,
                    activeButton === 2 && styles.activeList,
                  )}
                >
                  <li>
                    <Link className={styles.seoLink} href="#">
                      Result 2
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.seoLink} href="#">
                      Result 4
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.seoLink} href="#">
                      Result 6
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.seoLink} href="#">
                      Result 8
                    </Link>
                  </li>
                </ul>
              </div>
            </SimpleBar>
          </div>
        </div>
      </div>
      <div className={styles.bottomLine}>
        <div className="container">
          <div className={styles.bottomLineContent}>
            © Mot Motor – интернет-магазин в Москве: купить лодочный мотор,
            лодку ПВХ, лодку РИБ-ПВХ, SUP-доску, квадроцикл, мотобуксировщик,
            снегоход, снегоуборщик
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
