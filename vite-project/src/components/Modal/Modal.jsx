import S from "./Modal.module.css";

export function Modal({ show, children }) {
  if (!show) {
    return;
  }
  return (
    <div className={S.container}>
      <div className={S.content}>{children}</div>
    </div>
  );
}
