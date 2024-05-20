import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

import styles from "./modalWindows.module.scss";
import Button from "@/_components/Button";
import InputField from "@/_components/InputField";
import ModalWindowsProps from "@/_components/ModalWindows/ModalWindows.interface";

const ModalWindows = ({ callback }: ModalWindowsProps) => {
  const dynamicClassname = { [styles.callback]: callback };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Отправка формы:", { name, phone, consent });
    //   ToDo: Сделать закрытие модального окна после отправки формы
  };

  return (
    <div className={classNames(styles.root, dynamicClassname)}>
      <div className={classNames(styles.modal, dynamicClassname)}>
        <div className={classNames(styles.titleWrapper, dynamicClassname)}>
          <h2 className={classNames(styles.title, dynamicClassname)}>
            {callback && "Заказать звонок"}
          </h2>
          <p className={classNames(styles.subtitle, dynamicClassname)}>
            {callback &&
              "Наш оператор свяжется с Вами в течение нескольких минут"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={classNames(styles.form, dynamicClassname)}
        >
          {callback && (
            <>
              <InputField
                title="Ваше имя"
                type="text"
                placeholder="Введите ваше имя"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <InputField
                title="Телефон"
                type="tel"
                placeholder="Введите ваш телефон"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <InputField
                type="checkbox"
                checked={consent}
                onCheckboxChange={e => setConsent(e.target.checked)}
                consentText={
                  <>
                    Даю свое согласие на обработку персональных данных,
                    соглашаюсь с
                    <Link href={"#"}>политикой конфиденциальности</Link> и
                    принимаю
                    <Link href={"#"}>условия оферты</Link>
                  </>
                }
              />
            </>
          )}
          <Button type="submit" secondary>
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindows;
