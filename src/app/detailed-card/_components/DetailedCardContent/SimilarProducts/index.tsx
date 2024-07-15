"use client";
import ProductCardCarousel from "@/_components/ProductCardCarousel";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const SimilarProducts = () => {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-3xl text-center md:text-start md:text-mm-title-two mb-9">
          Похожие товары
        </h2>
        <ProductCardCarousel cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default SimilarProducts;
