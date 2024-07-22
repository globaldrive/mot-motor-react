import ProductCard from "@/_components/ProductCard";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const ProductCardsResult = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3">
      {productCardsData.map(card => {
        return (
          <li key={card.id}>
            <ProductCard cardData={card} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductCardsResult;
