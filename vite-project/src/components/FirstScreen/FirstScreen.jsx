import S from "./FirstScreen.module.css";

export function FirstScreen({ onSubscribe }) {
  return (
    <main className={S.container}>
      <h2 className={S.title}>Запишитесь на первое пробное занятие</h2>
      <button className={S.button} onClick={onSubscribe}>
        Записаться
      </button>
    </main>
  );
}
