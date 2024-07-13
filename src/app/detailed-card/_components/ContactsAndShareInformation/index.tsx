"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

import contactDetails from "@/_data/communication/communication.json";
import { RootState } from "@/_store/store";
import FormatPhoneNumber from "@/_utils/formatPhoneNumber";
import RoutesPaths from "@/types/enums/routes";

interface ContactsAndShareInformationProps {
  productTitle: string;
  productId: number;
}

const ContactsAndShareInformation = ({
  productTitle,
}: ContactsAndShareInformationProps) => {
  const currentCity = useSelector((state: RootState) => state.userDetails.city);

  return (
    <section>
      <div className="container">
        <h2 className="text-3xl mb-4 font-medium">
          {productTitle} - продажа в {currentCity} -{" "}
          <a
            href={`tel:${contactDetails.mainNumber}`}
            className="font-normal text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
          >
            {FormatPhoneNumber(contactDetails.mainNumber)}
          </a>
        </h2>
        <div className="text-sm font-bold">
          <p>
            Купить {productTitle} в {currentCity} СО СКЛАДА в интернет-магазине
            Mot-motor. Доступен НАЛОЖЕННЫЙ ПЛАТЕЖ. Продажа в{" "}
            <Link
              href={RoutesPaths.credit}
              className="text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
            >
              кредит
            </Link>{" "}
            и{" "}
            <Link
              href={RoutesPaths.loan}
              className="text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
            >
              рассрочку
            </Link>
            .
          </p>
          <p className="mb-4">
            Звоните по телефону магазина в {currentCity}{" "}
            <a
              href={`tel:${contactDetails.mainNumber}`}
              className="font-normal text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
            >
              {FormatPhoneNumber(contactDetails.mainNumber)}
            </a>
          </p>
          <p>
            Перешлите друзьям ссылку на {productTitle} в {currentCity}
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ContactsAndShareInformation;
