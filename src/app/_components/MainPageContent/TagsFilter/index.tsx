"use client";
import { useState } from "react";

import styles from "./tagsFilter.module.scss";
import ProductCard from "@/_components/ProductCard";
import Tabs from "@/_components/Tabs";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const mockTabsContent = [
  { title: "Выбор покупателей", svgIcon: "1" },
  { title: "Скидки", svgIcon: "2" },
  { title: "Успей купить", svgIcon: "3" },
];
const TagsFilter = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = () => {};

  return (
    <section>
      <div className="container">
        <div className={styles.tagsWrapper}>
          <Tabs
            tabs={mockTabsContent}
            activeTabIndex={activeTab}
            setActiveTabIndex={setActiveTab}
            onTabClick={handleTabClick}
            showIcon
            main
          />
        </div>
        <div>
          <ul className={styles.productCardsList}>
            {productCardsData.map(card => {
              return (
                <li key={card.id}>
                  <ProductCard
                    id={card.id}
                    title={card.title}
                    images={card.images}
                    currentPrice={card.currentPrice}
                    oldPrice={card.oldPrice}
                    main
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TagsFilter;
