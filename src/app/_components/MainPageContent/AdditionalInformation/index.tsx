import classNames from "classnames";
import Link from "next/link";

import styles from "./additionalInformation.module.scss";
import RoutesPaths from "@/types/enums/routes";

const AdditionalInformation = () => {
  return (
    <section>
      <div className={classNames(styles.textContainer, "container")}>
        <div className={styles.contentWrapper}>
          <div>
            <h1 className={styles.mainTitle}>
              Интернет-мотомагазин-мотосалон в Москве Mot-motor
            </h1>
            <p className={styles.paragraph}>
              Интернет-мотосалон-мотомагазин в Москве «Mot-Motor» - это большой
              выбор качественной мототехники, товаров для любителей отдыха на
              воде, профессиональных рыбаков, людей предпочитающие летние и
              зимние поездки. В нашем каталоге интернет магазина представлены
              как лёгкие модели на 1-2 человека, так и солидные виды
              мототехники, рассчитанные на семейное использование или большую
              дружную компанию.
            </p>
          </div>
          <div>
            <h2 className={styles.secondaryTitle}>
              Скидки на мототехнику в мотомагазине в Москве
            </h2>
            <p className={styles.paragraph}>
              У нас вы всегда можете найти мототехнику в Москве со скидками по
              акции, так как поставщики предоставляют нашему интернет-магазину
              выгодные условия за счет больших объемов оптовых покупок.
            </p>
          </div>
          <div>
            <h2 className={styles.secondaryTitle}>
              Кредит, рассрочка на мототехнику в мотосалоне в Москве
            </h2>
            <p className={styles.paragraph}>
              Ознакомьтесь с условиями продажи мототехники в Москве в{" "}
              <Link className={styles.link} href={RoutesPaths.credit}>
                КРЕДИТ
              </Link>{" "}
              и{" "}
              <Link className={styles.link} href={RoutesPaths.loan}>
                РАССРОЧКУ
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className={styles.secondaryTitle}>
              Ремонт мототехники в Москве
            </h2>
            <p className={styles.paragraph}>
              Квалифицированный ремонт и обслуживание мототехники в нашей
              компании — гарантированно высокий уровень сервиса и качества
              работ. Запчасти и аксессуары Вы можете приобрести в нашем
              авторизованном сервисном центре. Мототехника приобретенная в нашем
              мотосалоне обслуживается с 20% скидкой.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInformation;
