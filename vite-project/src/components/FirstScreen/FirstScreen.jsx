import { useContext } from "react";
import S from "./FirstScreen.module.css";
import { AppContext } from "../../lib/AppContext";

export function FirstScreen() {
  const { setShowSubscribeModal } = useContext(AppContext);

  const onSubscribe = () => {
    setShowSubscribeModal(true);
  };
  return (
    <main className={S.container}>
      <h2 className={S.title}>Запишитесь на первое пробное занятие</h2>
      <button className={S.button} onClick={onSubscribe}>
        Записаться
      </button>
    </main>
  );
}
