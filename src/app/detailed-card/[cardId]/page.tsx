import cardData from "@/_data/mockProductCardsData/productCardData.json";
import DetailedCardContent from "@/detailed-card/_components/DetailedCardContent";

const DetailedCard = async (props: { params: { cardId: string } }) => {
  const card = cardData.find(card => Number(props.params.cardId) === card.id);
  if (!card) {
    return (
      <>
        Карточку с таким ID я не нашел в нашей базе, пожалуйста выберите другой
        продукт или свяжитесь с нашим специалистом
      </>
    );
  }
  return <DetailedCardContent />;
};

export default DetailedCard;
