import Image from "next/image";

import { Button } from "@/_components/ui/button";
import FormatPhoneNumber from "@/_utils/formatPhoneNumber";

const VideoConsultation = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div>
            <div>Остались вопросы?</div>
            <div>Проконсультируем бесплатно!</div>
            <p>Поможем с выбором модели оптимальной под ваши запросы.</p>
          </div>
          <div>
            <Button>Заказать видеоконсультацию</Button>
            <div>
              <Button></Button>
              <div>
                <p>Телефон магазина</p>
                <div>{FormatPhoneNumber("8 800 511 71 94")}</div>
              </div>
            </div>
          </div>
          <Image
            src="/consultant.png"
            alt="Консультант"
            width={230}
            height={320}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoConsultation;
