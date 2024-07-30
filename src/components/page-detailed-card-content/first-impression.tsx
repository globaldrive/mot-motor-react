import Image from "next/image";

import BreadCrumbCustom from "@/components/bread-crumb-custom";
import BuyProduct from "@/components/buy-product";
import MainCharacteristicsList from "@/components/main-characteristics-list";
import ProductPresentationImgs from "@/components/products-presentation-imgs";
import mockProductCardBreadCrumbData from "@/data/mock-product-cards-data/product-card-bread-crumb.json";
import prefix from "@/utils/prefix";

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
        <div className="pt-4 md:mb-7">
          <BreadCrumbCustom routes={mockProductCardBreadCrumbData} />
        </div>
        <div className="flex flex-col gap-0 md:gap-8 lg:gap-12 lg:flex-row lg:justify-between">
          <div className="relative pt-10 md:pt-0  md:border md:border-gray-300 md:p-5 md:rounded-lg">
            <ProductPresentationImgs />
            <MainCharacteristicsList
              hideMobile
              characteristics={mainCharacteristics}
            />
            <Image
              className="absolute top-1 right-1 md:right-5 w-auto h-auto md:w-auto md:h-auto"
              src={`${prefix}/brands/11.png`}
              alt="Бренд"
              width={75}
              height={29}
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
