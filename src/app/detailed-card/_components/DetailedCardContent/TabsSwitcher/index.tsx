import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/_components/ui/tabs";
import ProductDescription from "@/detailed-card/_components/DetailedCardContent/TabsSwitcher/TabsContent/ProductDescription";

const mockTabsList = [
  { id: 1, title: "Описание", content: <ProductDescription /> },
  { id: 2, title: "Все характеристики", content: "Page 2" },
  { id: 3, title: "Отзывы", content: "Page 3" },
];

const TabsSwitcher = () => {
  return (
    <section>
      <div className="container">
        <Tabs defaultValue={mockTabsList[0].title} className="md:mb-9 xl:mb-14">
          <div className="overflow-auto">
            <TabsList className="flex h-full gap-5 pb-0 md:gap-12 whitespace-nowrap w-full justify-start bg-transparent mb-6 border-b border-[#ccc]">
              {mockTabsList.map(tab => {
                return (
                  <TabsTrigger
                    className="pb-4 min-w-fit px-0 md:pb-6 gap-3 text-xl font-medium data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-mm-main shadow-none"
                    key={tab.title}
                    value={tab.title}
                  >
                    {tab.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {mockTabsList.map(tab => {
            return (
              <TabsContent key={tab.id} value={tab.title}>
                {tab.content}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default TabsSwitcher;
