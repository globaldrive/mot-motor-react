import BuyProduct from "@/detailed-card/_components/BuyProduct";
import CardBreadCrumbs from "@/detailed-card/_components/CardBreadCrumbs";
import MainCharacteristicsList from "@/detailed-card/_components/MainCharacteristicsList";
import ProductPresentationImgs from "@/detailed-card/_components/ProductPresentationImgs";

const mockMainCharacteristics = {
  Бренд: "Hangkai",
  "Грузоподьемность, кг": "450",
  "Длина, см": "320",
  "Страна бренда": "Китай",
  "Ширина, см": "153",
  "Внутренняя длина, см": "223",
};
const FirstImpression = () => {
  const mainCharacteristics = Object.entries(mockMainCharacteristics);
  return (
    <section>
      <div className="container">
        <CardBreadCrumbs />
        <div className="flex flex-col gap-8 lg:gap-12 lg:flex-row lg:justify-between">
          <div className="border border-gray-300 p-5 rounded-lg">
            <ProductPresentationImgs />
            <MainCharacteristicsList
              hideMobile
              characteristics={mainCharacteristics}
            />
          </div>
          <div className="lg:pt-20">
            <BuyProduct characteristics={mainCharacteristics} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstImpression;
