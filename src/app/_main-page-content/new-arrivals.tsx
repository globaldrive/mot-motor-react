"use client";
import ProductCardCarousel from "../../components/product-card-carousel";
import productCardsData from "@/_data/mock-product-cards-data/product-card-data.json";

const NewArrivals = () => {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-3xl text-center md:text-start md:text-mm-title-two mb-9">
          Новые поступления
        </h2>
        <ProductCardCarousel cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default NewArrivals;
