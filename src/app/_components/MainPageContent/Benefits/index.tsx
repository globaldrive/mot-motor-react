import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "./benefits.module.scss";
import benefitSvg from "@/_assets/images/svgs/1.svg";
import benefitsData from "@/_data/mainPage/benefits.json";
import benefitsLineData from "@/_data/mainPage/benefitsLine.json";

const Benefits = () => {
  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((part, index) => (
      <React.Fragment key={index}>
        {part}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>ПОЧЕМУ С НАМИ ВЫГОДНО</h2>
        <ul className={styles.list}>
          {benefitsData.map(benefit => {
            return (
              <li key={benefit.id} className={styles.item}>
                <div className={styles.round}>
                  <Image
                    src={`/benefitsSvg/${benefit.id}.svg`}
                    alt="Иконка преимущества"
                    width={40}
                    height={40}
                  />
                </div>
                <span className={classNames(styles.text, styles.lineText)}>
                  {renderWithLineBreaks(benefit.title)}
                </span>
              </li>
            );
          })}
        </ul>
        <div className={styles.benefitLine}>
          <ul className={styles.lineList}>
            {benefitsLineData.map(benefit => {
              return (
                <li key={benefit.id} className={styles.lineListItem}>
                  <Image
                    src={benefitSvg}
                    alt="Иконка преимущества"
                    width={40}
                    height={40}
                  />
                  <div className={styles.lineTextWrapper}>
                    <h5 className={styles.lineTextTitle}>{benefit.title}</h5>
                    <span>{renderWithLineBreaks(benefit.description)}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
